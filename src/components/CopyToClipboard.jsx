import React, {useState} from "react";
import styles from "./CopyToClipboard.module.css";

const CopyToClipboard = ({ text, children, message }) => {
    const [copySuccess, setCopySuccess] = useState("");
    const copyToClipboard = async () => {
      try {
        await navigator.clipboard.writeText(text);
        setCopySuccess(message || "Copied!");
        setTimeout(() => setCopySuccess(""), 2000); // Hide after 2 seconds
      } catch (err) {
        setCopySuccess("Failed to copy!");
        setTimeout(() => setCopySuccess(""), 2000); // Hide after 2 seconds
      }
    };

    const handleClick = () => {
      copyToClipboard();
      if (children.props.onClick) {
        children.props.onClick();
      }
    };

    return (
      <div className={styles["copy-to-clipboard-wrapper"]}>
        {React.cloneElement(children, { onClick: handleClick })}
        {copySuccess && <div className={styles["popup"]}>{copySuccess}</div>}
      </div>
    );
};

export default CopyToClipboard;