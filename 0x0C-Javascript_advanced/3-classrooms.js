function createClassRoom(numbersOfStudents) {
  function studentSeat(seat) {
    return () => seat;
  }
  let students = Array.from({ length: numbersOfStudents }, (_, i) =>
    studentSeat(i + 1)
  );
  return students;
}
let classRoom = createClassRoom(10);
