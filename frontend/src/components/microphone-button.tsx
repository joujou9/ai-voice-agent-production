import {
  TrackToggle,
  useLocalParticipant,
  // useMaybeRoomContext,
} from "@livekit/components-react";
import { Track } from "livekit-client";
import { useEffect, useState } from "react";
import { Button } from "./button";
import { DeviceSelector } from "./device-selector";
import { MicrophoneOffSVG, MicrophoneOnSVG } from "./icons";
import { AgentMultibandAudioVisualizer } from "./visualization/agent-multiband-visualizer";

type MicrophoneButtonProps = {
  localMultibandVolume: Float32Array[];
};
export const MicrophoneButton = ({
  localMultibandVolume,
}: MicrophoneButtonProps) => {
  // TODO: fix this
  // const room = useMaybeRoomContext();
  const localParticipant = useLocalParticipant();
  const [isMuted, setIsMuted] = useState(localParticipant.isMicrophoneEnabled);
  useEffect(() => {
    setIsMuted(localParticipant.isMicrophoneEnabled === false);
  }, [localParticipant.isMicrophoneEnabled]);

  return (
    <Button
      state="secondary"
      size="medium"
      className="flex items-center justify-center gap-2"
      onClick={() => {}}
    >
      <TrackToggle
        source={Track.Source.Microphone}
        className={
          "flex items-center justify-center gap-2 h-full " +
          (isMuted ? "opacity-50" : "")
        }
        showIcon={false}
      >
        {isMuted ? <MicrophoneOffSVG /> : <MicrophoneOnSVG />}
        <AgentMultibandAudioVisualizer
          state="speaking"
          barWidth={3}
          minBarHeight={2}
          maxBarHeight={16}
          frequencies={localMultibandVolume}
          gap={2}
        />
        <div className="w-[2px] bg-white/20 h-4"></div>
        <DeviceSelector kind="audioinput" />
      </TrackToggle>
    </Button>
  );
};
