import { Project } from '../../contexts/ProjectsContext'
import { ActionTypes } from './actions'

interface ProjectsState {
  projects: Project[]
}

export function ProjectReducer(state: ProjectsState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_NEW_ACTIVE_PROJECT:
      return {
        ...state,
        projects: [...state.projects, action.payload.newProject],
      }
  }
  return state
}


