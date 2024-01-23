import { FC, useEffect } from "react";
import { useAudioRecorder, AudioRecorder } from "react-audio-voice-recorder";

const App: FC = () => {
  const recorderControls = useAudioRecorder();
  const addAudioElement = (blob: any) => {
    const url = URL.createObjectURL(blob);
    const audio = document.createElement("audio");
    audio.src = url;
    audio.controls = true;
    document.body.appendChild(audio);
  };

  return (
    <div className="App">
      <h1>Tsuru Audio Test</h1>
      <hr />
      <div>
        <AudioRecorder
          onRecordingComplete={addAudioElement}
          recorderControls={recorderControls}
        />
        {recorderControls.isRecording && <button onClick={recorderControls.stopRecording}>Stop recording</button>}
      </div>
    </div>
  );
};

export default App;
