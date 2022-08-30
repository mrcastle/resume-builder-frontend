import { TechnicalCategory } from "../../../types/resume";

import Grid from "@mui/material/Grid";

import styles from "./TechnicalSkillsRow.module.scss";

interface SkillsDisplayProps {
  skills: string[];
}

function SkillsDisplay({ skills }: SkillsDisplayProps) {
  return (
    <>
      {skills.map((skill, index) => {
        const appendDisplay = index !== skills.length - 1 ? ", " : "";

        return (
          <span key={`skills-display-${skill}-${index}`}>
            {skill}
            {appendDisplay}
          </span>
        );
      })}
    </>
  );
}

interface TechnicalSkillsRowProps {
  row: TechnicalCategory;
}

function TechnicalSkillsRow({ row }: TechnicalSkillsRowProps) {
  const { name, skills } = row;

  return (
    <Grid className={styles.Wrapper} container>
      <Grid className={styles.Item} item xs={4}>
        {name}
      </Grid>
      <Grid className={styles.Item} item xs={8}>
        <SkillsDisplay skills={skills} />
      </Grid>
    </Grid>
  );
}

export default TechnicalSkillsRow;
