import { Module } from "./reducer"

export enum ActionTypes {
  ADD_NEW_MODULE = 'ADD_NEW_MODULE',
  DELETE_MODULE = 'DELETE_MODULE',
  GET_ITEMS_LOCAL_STORAGE = 'GET_LOCAL_STORAGE'
}

export function addNewModuleAction(newModule: Module) {
  return {
    type: ActionTypes.ADD_NEW_MODULE,
    payload: {
      newModule,
    },
  }
}

export function deleteModuleAction(id: string) {
  return {
    type: ActionTypes.DELETE_MODULE,
    payload: {
      id,
    }
  }
}