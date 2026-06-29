// type prop controls the message shown
// "ai" → AI-specific message
// anything else / not passed → generic loading message
function Loader({ type = "general" }) {
  return (
    <div className="loader-wrapper">
      <div className="loader-spinner"></div>
      {type === "ai" ? (
        <>
          <p className="loader-text">Generating AI Roadmap...</p>
          <p className="loader-subtext">This may take a few seconds</p>
        </>
      ) : (
        <>
          <p className="loader-text">Loading...</p>
          <p className="loader-subtext">Please wait</p>
        </>
      )}
    </div>
  );
}

export default Loader;