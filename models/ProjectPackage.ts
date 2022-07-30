import { INpmPackage, IProjectPackages } from './IProject';

/**
 * @class
 * @name ProjectPackages
 * @implements { IProjectPackages }
 * @summary Project Package class
 * @description Class version of the IProjectPackage
 * @author J. Trpka
 */
class ProjectPackages implements IProjectPackages {
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
   * @param { IProjectPackages } projectPackage 
   */
  constructor(projectPackage?: IProjectPackages) {
    if(!projectPackage) return;

    this.npm = projectPackage.npm;
    this.go = projectPackage.go;
    this.maven = projectPackage.maven;
    this.nuget = projectPackage.nuget;
  }

  /**
   * @function isEmpty
   * @summary Is packages empty
   * @description Check if there are no packages set, if so return true
   * @author J. Trpka
   * @todo Would rather if the properties were looped instead of manually added
   * @returns { boolean }
   */
  public isEmpty = (): boolean => {
    if(this.isPackagesEmpty(this.npm)
      && this.isPackagesEmpty(this.go)
      && this.isPackagesEmpty(this.maven)
      && this.isPackagesEmpty(this.nuget)) return true;

    return false;
  }

  /**
   * @function isPackagesEmpty
   * @summary Is type of packages empty
   * @description Is a set of packages empty; if so return true.
   * @author J. Trpka
   * @param { any[] } arrayOfPackages - There is no point checking what type of array; just need to be identified as an array
   * @returns { boolean }
   */
  private isPackagesEmpty = (arrayOfPackages?: Array<any>): boolean => {
    if(!arrayOfPackages || arrayOfPackages.length === 0) return true;
    
    return false;
  }
}

export default ProjectPackages;