interface PersonaDominic {
    id: number;
    name: string;
}

interface EmployeeDominic extends PersonaDominic {
    dept: string;
}

interface CustomerDominic extends PersonaDominic {
    country: string;
}

const test01: EmployeeDominic = {
    id: 1,
    name: 'Chris',
    dept: "Ecuador"
}
