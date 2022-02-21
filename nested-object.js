
const x = 'nude pic';

const nestedObject = {
    id: {
        primary: 1234,
        secondary: 'abc12'
    },

    name: {
        firstName: 'amzad',
        secondNAme: 'ali',
        lastName: 'khan'
    },
    age: 30,
    Address: {
        parmanent: 'sagolnaia,Barishal',
        present: 'gulsan, Dhaka'
    },
    quality: {
        academic: {
            ssc: 'A+',
            hsc: 'A',
            degree: 'pass'
        },
        language: 'Bangla',
        extraActivities: {
            sports: 'hockey',
            hobby: `collecting ${x}`,
            interested: 'Only in Women'
        }
    },
    academicPassingYear: [2010, 2013, 2019]

}


const output = nestedObject?.name?.firstName;
console.log(output);