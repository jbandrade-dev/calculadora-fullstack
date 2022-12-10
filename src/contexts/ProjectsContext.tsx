import { v4 as uuidv4 } from "uuid"
import { ReactNode, createContext, useState, useEffect } from "react"

export interface Project {
  id: string
  nameProject: string
}

interface CreateNewProjectData {
  nameProject: string

}

interface ProjectsContextType {
  projects: Project[]
  activeProject: Project | null
  createNewProject: (data: CreateNewProjectData) => void

}

interface ProjectsContextProviderProps {
  children: ReactNode
}

export const ProjectsContext = createContext({} as ProjectsContextType)

export function ProjectsContextProvider({
  children,
}: ProjectsContextProviderProps) {
  const [activeProject, setActiveProject] = useState<Project | null>(null)
  const [projects, setProjects] = useState<Project[]>([])

  useEffect(() => {
    const activeProject = JSON.parse(localStorage.getItem('activeProject')!)
    if(activeProject) setActiveProject(activeProject)
  }, [])


  useEffect(() => {
    localStorage.setItem('activeProject', JSON.stringify(activeProject));
  }, [activeProject]);


  function createNewProject(newProjectData: CreateNewProjectData) {

    const newProject: Project = {
      id: uuidv4(),
      nameProject: newProjectData.nameProject,
    }
    setProjects([...projects, newProject])
    setActiveProject(newProject)
    location.href = "/calculadora/"
  }

  return (
    <ProjectsContext.Provider value={{
      projects,
      activeProject,
      createNewProject,
    }}>
      {children}
    </ProjectsContext.Provider>
  )
}
