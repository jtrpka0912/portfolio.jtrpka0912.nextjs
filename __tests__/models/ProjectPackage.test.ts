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

  test('Convert from an empty object', () => {
    // Arrange
    const projectPackageObject: ProjectPackage = new ProjectPackage({});

    // Assert
    expect(projectPackageObject.go).toBeUndefined();
    expect(projectPackageObject.maven).toBeUndefined();
    expect(projectPackageObject.npm).toBeUndefined();
    expect(projectPackageObject.nuget).toBeUndefined();
  });

  test('Convert from undefined', () => {
    // Arrange
    const projectPackageObject: ProjectPackage = new ProjectPackage(undefined);

    // Assert
    expect(projectPackageObject.go).toBeUndefined();
    expect(projectPackageObject.maven).toBeUndefined();
    expect(projectPackageObject.npm).toBeUndefined();
    expect(projectPackageObject.nuget).toBeUndefined();
  });
});

describe('isEmpty()', () => {
  test('Return false when there are packages', () => {
    // Arrange
    const projectPackageObject: ProjectPackage = new ProjectPackage({
      npm: [],
      maven: ['spring-boot', 'spring-mvc'],
      go: ['websocket'],
      nuget: []
    });

    // Assert
    expect(projectPackageObject.isEmpty()).toBeFalsy();
  })

  test('Return true when there are no packages', () => {
    // Arrange
    const projectPackageObject: ProjectPackage = new ProjectPackage({
      npm: [],
      go: []
    });

    // Assert
    expect(projectPackageObject.isEmpty()).toBeTruthy();
  })

  test('Return true when it is just an empty void', () => {
    // Arrange
    const projectPackageObject: ProjectPackage = new ProjectPackage({});

    // Assert
    expect(projectPackageObject.isEmpty()).toBeTruthy();
  })

  test('Return true when it is just undefined', () => {
    // Arrange
    const projectPackageObject: ProjectPackage = new ProjectPackage(undefined);

    // Assert
    expect(projectPackageObject.isEmpty()).toBeTruthy();
  })
})