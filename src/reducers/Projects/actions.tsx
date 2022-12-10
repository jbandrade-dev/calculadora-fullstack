import { Project } from "../../contexts/ProjectsContext"

export enum ActionTypes {
  ADD_NEW_ACTIVE_PROJECT = 'ADD_NEW_ACTIVE_PROJECT',
}

export function addNewProjectAction(newProject: Project) {
  return {
    type: ActionTypes.ADD_NEW_ACTIVE_PROJECT,
    payload: {
      newProject,
    },
  }
}