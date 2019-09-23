import * as actionsType from './actions';

export function enterPatient(patient) {
  return {
    type: actionsType.PATIENT_ENTERED,
    payload: patient
  };
}

export function flipBody(face) {
  return {
    type: actionsType.FLIP_BODY,
    payload: face
  };
}

export function selectMuscle(muscleName) {
  return {
    type: actionsType.MUSCLE_SELECTED,
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
    type: actionsType.MUSCLE_FORCE_CHANGED,
    payload: newMuscles
  };
}
