import asyncio
import threading
import uvicorn
from fastapi import FastAPI
from main import cli, WorkerOptions, entrypoint, prewarm

app = FastAPI(title="LiveKit Voice Agent")

@app.get("/")
def root():
    return {"message": "LiveKit Voice Agent is running"}

@app.get("/healthz")
def health():
    return {"status": "healthy"}

def run_agent():
    """Executa o LiveKit agent em thread separada"""
    cli.run_app(WorkerOptions(entrypoint_fnc=entrypoint, prewarm_fnc=prewarm))

@app.on_event("startup")
async def startup():
    # Iniciar o agent em background
    agent_thread = threading.Thread(target=run_agent, daemon=True)
    agent_thread.start()

if __name__ == "__main__":
    import os
    port = int(os.environ.get("PORT", 8080))
    uvicorn.run(app, host="0.0.0.0", port=port)