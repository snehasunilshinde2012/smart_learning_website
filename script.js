const form = document.getElementById('learningForm');
const attendance = document.getElementById('attendance');
const attendanceValue = document.getElementById('attendanceValue');
const result = document.getElementById('result');

attendance.addEventListener('input', () => {
  attendanceValue.value = `${attendance.value}%`;
  attendanceValue.textContent = `${attendance.value}%`;
});

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = document.getElementById('studentName').value.trim();
  const marks = Number(document.getElementById('marks').value);
  const hours = Number(document.getElementById('studyHours').value);
  const present = Number(attendance.value);

  if (!name || !Number.isFinite(marks) || marks < 0 || marks > 100 ||
      !Number.isFinite(hours) || hours < 0 || hours > 24) {
    alert('Please enter valid student details.');
    return;
  }

  let level, recommendation, icon;
  if (marks >= 75 && hours >= 3 && present >= 75) {
    level = 'Excellent';
    recommendation = 'Great work! Continue your current learning routine, revise regularly, and challenge yourself with practice questions.';
    icon = '✓';
  } else if (marks >= 50 && hours >= 2 && present >= 60) {
    level = 'Average';
    recommendation = 'Practice more questions, revise your notes regularly, and set a small daily study goal to strengthen difficult topics.';
    icon = '↗';
  } else {
    level = 'Needs Improvement';
    recommendation = 'Create a realistic study timetable, review difficult topics in short sessions, practice regularly, and try to attend classes consistently.';
    icon = '✧';
  }

  document.getElementById('resultTitle').textContent = `${level} performance`;
  document.getElementById('resultIcon').textContent = icon;
  document.getElementById('resultGreeting').textContent = `Hi ${name}, here is your learning pattern summary.`;
  document.getElementById('outMarks').textContent = `${marks}/100`;
  document.getElementById('outHours').textContent = `${hours} hrs`;
  document.getElementById('outAttendance').textContent = `${present}%`;
  document.getElementById('recommendationText').textContent = recommendation;

  result.classList.remove('hidden');
  result.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
});

document.getElementById('resetButton').addEventListener('click', () => {
  form.reset();
  attendanceValue.value = '80%';
  attendanceValue.textContent = '80%';
  result.classList.add('hidden');
  document.getElementById('studentName').focus();
});
