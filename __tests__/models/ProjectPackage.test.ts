import ProjectPackage from "../../models/ProjectPackage";

describe('Constructor', () => {
  test('Convert an IProjectPackage to a class', () => {
    // Arrange
    const projectPackageObject: ProjectPackage = new ProjectPackage({
      npm: [],
      maven: ['spring-boot', 'spring-mvc'],
      go: ['websocket'],
      nuget: []
    });

    // Assert
    expect(projectPackageObject.go).toHaveLength(1);
    expect(projectPackageObject.maven).toHaveLength(2);
    expect(projectPackageObject.npm).toHaveLength(0);
    expect(projectPackageObject.nuget).toHaveLength(0);
  });
});