import styles from "./ResumeText.module.scss";

interface ResumeTextProps {
  text: string;
}

function ResumeText({ text }: ResumeTextProps) {
  return <div className={styles.Wrapper}>{text}</div>;
}

export default ResumeText;
