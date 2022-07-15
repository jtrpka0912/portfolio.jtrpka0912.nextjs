import { INpmPackage, IProjectPackage } from './IProject';

/**
 * @class
 * @name ProjectPackage
 * @implements { IProjectPackage }
 * @summary Project Package class
 * @description Class version of the IProjectPackage
 * @author J. Trpka
 */
class ProjectPackage implements IProjectPackage {
  /**
   * @public
   * @property { INpmPackage[] } npm
   */
  public npm?: INpmPackage[];

  /**
   * @public
   * @property { string[] } go
   * @todo Convert eventually to IGoPackage
   */
  public go?: string[];

  /**
   * @public
   * @property { string[] } nuget
   * @todo Convert eventually to INugetPackage
   */
  public nuget?: string[];

  /**
   * @public
   * @property { string [] } maven
   * @todo Convert eventually to IMavenPackage
   */
  public maven?: string[];


  /**
   * @constructor
   * @summary Project package constructor
   * @description Convert a IProjectPackage into a class with functionality
   * @author J. Trpka
   * @param { IProjectPackage } projectPackage 
   */
  constructor(projectPackage: IProjectPackage) {
    this.npm = projectPackage.npm;
    this.go = projectPackage.go;
    this.maven = projectPackage.maven;
    this.nuget = projectPackage.nuget;
  }
}

export default ProjectPackage;