import { FC } from "react";
import { AudioRecorder } from "react-audio-voice-recorder";

const App: FC = () => {
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
      <AudioRecorder 
        onRecordingComplete={addAudioElement}
        audioTrackConstraints={{
          noiseSuppression: true,
          echoCancellation: true,
        }} 
        downloadFileExtension="webm"
      />
    </div>
  );
}

export default App;
