export class Tag {
    //attributes
    static readonly ANGULAR = new Tag('Angular', 'red');
    static readonly TYPESCRIPT = new Tag('TypeScript', '#007acc');
    static readonly PYTHON = new Tag('Python', 'pink');
    static readonly CSHARP = new Tag('C#', 'green');
    static readonly JAVA = new Tag('Java', 'orange');
    static readonly NODEJS = new Tag('NodeJS', 'brown');
    static readonly ASPNET = new Tag('ASP.NET', 'purple');
    static readonly JAVASCRIPT = new Tag('Javascript', 'gold');
    static readonly REACT = new Tag('React', 'blue');

    //constructor
    private constructor(private readonly key: string, public readonly color: string) {

    }

    //methods
    toString() {
        return this.key;
    }
}