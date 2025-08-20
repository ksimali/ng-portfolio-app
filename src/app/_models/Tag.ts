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
    static readonly SPRINGBOOT = new Tag('Springboot', '#6db33f');
    static readonly DJANGO = new Tag('Django', 'green');
    static readonly EXPRESSJS = new Tag('Expressjs', '#303030');
    static readonly MYSQL = new Tag('MySQL','#FFA500');
    static readonly MONGODB = new Tag('MongoDB','#00684A');
    static readonly BOOTSTRAP = new Tag('Bootstrap', '#6f42c1');

    //constructor
    private constructor(private readonly key: string, public readonly color: string) {

    }

    //methods
    toString() {
        return this.key;
    }
}