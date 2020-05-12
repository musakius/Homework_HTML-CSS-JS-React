let maxId = 4;

export const addTask = (label) => ({
  type: "ADD_TASK",
  payload: { label, id: ++maxId },
});

export const getValue = (label) => ({
  type: "VALUE",
  label,
});
