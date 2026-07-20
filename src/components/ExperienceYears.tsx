"use client";

type EmploymentPeriod = {
  start: Date;
  end?: Date;
};

/*
 * Full-time employment only.
 *
 * TCS: Oct 2018 through Dec 2020
 * Amazon: Aug 2023 through the present
 *
 * End dates are exclusive. Jan 1, 2021 represents employment
 * through the end of Dec 2020.
 */
const fullTimeEmployment: EmploymentPeriod[] = [
  {
    start: new Date(Date.UTC(2018, 9, 1)),
    end: new Date(Date.UTC(2021, 0, 1)),
  },
  {
    start: new Date(Date.UTC(2023, 7, 1)),
  },
];

function completedMonths(start: Date, end: Date): number {
  let months =
    (end.getUTCFullYear() - start.getUTCFullYear()) * 12 +
    (end.getUTCMonth() - start.getUTCMonth());

  if (end.getUTCDate() < start.getUTCDate()) {
    months -= 1;
  }

  return Math.max(0, months);
}

function calculateExperienceYears(asOf: Date): number {
  const totalMonths = fullTimeEmployment.reduce((total, period) => {
    const periodEnd = period.end ?? asOf;
    return total + completedMonths(period.start, periodEnd);
  }, 0);

  return Math.floor(totalMonths / 12);
}

export default function ExperienceYears() {
  const years = calculateExperienceYears(new Date());

  return <span suppressHydrationWarning>{years}</span>;
}