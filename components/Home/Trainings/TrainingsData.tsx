interface TrainingLevel {
  id: string;
  courseType: string;
  percent: number;
  width: string;
  style: "greenRectangular" | "yellowFilled" | "greenRectangular2"; // Define allowed styles
}

export const TrainingLevelsData: TrainingLevel[] = [
  {
    id: "1",
    courseType: "BEGINNER COURSES",
    percent: 80,
    width: "80",
    style: "greenRectangular",
  },
  {
    id: "2",
    courseType: "INTERMEDIATE COURSES",
    percent: 50,
    width: "50",
    style: "yellowFilled",
  },
  {
    id: "3",
    courseType: "ADVANCED COURSES",
    percent: 60,
    width: "60",
    style: "greenRectangular2",
  },
];
