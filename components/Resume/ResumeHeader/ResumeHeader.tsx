import styles from "./ResumeHeader.module.scss";

interface ResumeHeaderProps {
  text: string;
}

function ResumeHeader({ text }: ResumeHeaderProps) {
  return <div className={styles.Wrapper}>{text}</div>;
}

export default ResumeHeader;
