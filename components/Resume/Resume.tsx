import Paper from "@mui/material/Paper";
import { useState, useEffect } from "react";
import { supabase } from "../../lib/initSupabase";
import { Resume } from "../../types/resume";

import styles from "./Resume.module.scss";
import ResumeHeader from "./ResumeHeader/ResumeHeader";
import ResumeText from "./ResumeText/ResumeText";
import TechnicalSkillsRow from "./TechnicalSkillsRow/TechnicalSkillsRow";
import Grid from "@mui/material/Grid";

function Resume() {
  const [resumes, setResumes] = useState<Resume[] | []>([]);
  useEffect(() => {
    fetchResumes();
  }, []);

  //TODO handle this better
  const resume = resumes[0] ?? {};

  const fetchResumes = async () => {
    let { data: resumes, error } = await supabase.from<Resume>("resumes")
      .select(`
        *,
        technical_categories (*)
      `);

    if (error) console.log("error", error);
    else setResumes(resumes ?? []);
  };

  return (
    <div className={styles.Wrapper}>
      <div className={styles.DisplayName}>{resume.display_user_name}</div>

      <div className={styles.Summary}>
        <ResumeHeader text="Summary" />
        <ResumeText text={resume.summary} />
      </div>

      <div>
        <ResumeHeader text="Technical Skills" />
        <div className={styles.TechnicalSkillsTable}>
          {resume.technical_categories?.map((row, idx) => {
            return (
              <TechnicalSkillsRow
                key={`technical-skills-row-${idx}`}
                row={row}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Resume;
