export function enterPatient(patient) {
  return {
    type: 'PATIENT_ENTERED',
    payload: patient
  };
}

export function flipBody(face) {
  return {
    type: 'FLIP_BODY',
    payload: face
  };
}

export function selectMuscle(muscleName) {
  return {
    type: 'MUSCLE_SELECTED',
    payload: muscleName
  };
}

export function changeMuscleForce(force, muscleInfo, musclesState) {
  const [name, side] = muscleInfo.split("-");

  const newMuscles = musclesState.map((muscleObj) => {
    if (muscleObj.name === name) {
      if (side === "left") {
        return {
          ...muscleObj,
          leftForce: Number(force)
        };
      }
      if (side === "right") {
        return {
          ...muscleObj,
          rightForce: Number(force)
        };
      }
    }
    return muscleObj;
  });

  return {
    type: 'MUSCLE_FORCE_CHANGED',
    payload: newMuscles
  };
}
