import * as actionsType from './actionsTypes';

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
      if (side === "right") {
        return {
          ...muscleObj,
          forceRight: Number(force)
        };
      } if (side === "left") {
        return {
          ...muscleObj,
          forceLeft: Number(force)
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

export function printingToogle(isPrinting) {
  return {
    type: actionsType.PRINTING_TOOGLE,
    payload: isPrinting
  };
}
