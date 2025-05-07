export const useTableData = () => {
    const tableData = ref([
        {
            name: 'John Doe',
            age: 30,
            address: '123 Main St, New York, NY',
            tags: ['loser', 'nice'],
            actions: 'Edit | Delete'
        },
        {
            name: 'Jane Smith',
            age: 28,
            address: '456 Maple Ave, Los Angeles, CA',
            tags: ['developer'],
            actions: 'Edit | Delete'
        },
        {
            name: 'David Johnson',
            age: 35,
            address: '789 Oak Dr, Chicago, IL',
            tags: ['nice', 'developer'],
            actions: 'Edit | Delete'
        },
        {
            name: 'Emily Carter',
            age: 26,
            address: '321 Pine Rd, Miami, FL',
            tags: ['teacher'],
            actions: 'Edit | Delete'
        },
        {
            name: 'Michael Brown',
            age: 40,
            address: '555 Cedar St, Dallas, TX',
            tags: ['loser', 'nice', 'developer'],
            actions: 'Edit | Delete'
        },
        {
            name: 'Olivia Davis',
            age: 29,
            address: '222 Elm St, Denver, CO',
            tags: ['teacher', 'nice'],
            actions: 'Edit | Delete'
        },
        {
            name: 'William Moore',
            age: 45,
            address: '101 Maple St, Seattle, WA',
            tags: ['developer'],
            actions: 'Edit | Delete'
        },
        {
            name: 'Sophia Anderson',
            age: 34,
            address: '809 Oak Ln, Portland, OR',
            tags: ['nice'],
            actions: 'Edit | Delete'
        },
        {
            name: 'James Thompson',
            age: 37,
            address: '160 Spruce Rd, Phoenix, AZ',
            tags: ['loser', 'teacher'],
            actions: 'Edit | Delete'
        },
        {
            name: 'Isabella Martinez',
            age: 31,
            address: '430 Willow Dr, Boston, MA',
            tags: ['developer', 'nice'],
            actions: 'Edit | Delete'
        },
        {
            name: 'Benjamin Lee',
            age: 33,
            address: '900 Birch Blvd, Atlanta, GA',
            tags: ['teacher', 'nice'],
            actions: 'Edit | Delete'
        },
        {
            name: 'Mia Walker',
            age: 27,
            address: '211 Cypress St, Minneapolis, MN',
            tags: ['developer'],
            actions: 'Edit | Delete'
        },
        {
            name: 'Alexander Hall',
            age: 36,
            address: '812 Cherry Ct, Austin, TX',
            tags: ['loser'],
            actions: 'Edit | Delete'
        },
        {
            name: 'Charlotte Young',
            age: 32,
            address: '777 Maple Dr, Salt Lake City, UT',
            tags: ['nice', 'teacher'],
            actions: 'Edit | Delete'
        },
        {
            name: 'Daniel Allen',
            age: 38,
            address: '122 Redwood Ln, Raleigh, NC',
            tags: ['developer', 'loser'],
            actions: 'Edit | Delete'
        },
        {
            name: 'Amelia Scott',
            age: 29,
            address: '455 Sequoia Blvd, Orlando, FL',
            tags: ['nice'],
            actions: 'Edit | Delete'
        },
        {
            name: 'Logan Adams',
            age: 41,
            address: '623 Aspen Rd, San Diego, CA',
            tags: ['teacher', 'developer'],
            actions: 'Edit | Delete'
        },
        {
            name: 'Harper Nelson',
            age: 25,
            address: '390 Fir Ave, Boise, ID',
            tags: ['loser'],
            actions: 'Edit | Delete'
        },
        {
            name: 'Elijah Rivera',
            age: 30,
            address: '103 Sycamore St, Charleston, SC',
            tags: ['nice', 'developer'],
            actions: 'Edit | Delete'
        },
        {
            name: 'Evelyn Campbell',
            age: 34,
            address: '680 Beech St, Tampa, FL',
            tags: ['teacher', 'loser'],
            actions: 'Edit | Delete'
        },
        {
            name: 'Henry Mitchell',
            age: 36,
            address: '876 Spruce St, Indianapolis, IN',
            tags: ['nice', 'developer'],
            actions: 'Edit | Delete'
        },
        {
            name: 'Abigail Roberts',
            age: 28,
            address: '321 Poplar Rd, Nashville, TN',
            tags: ['developer'],
            actions: 'Edit | Delete'
        },
        {
            name: 'Lucas Turner',
            age: 39,
            address: '132 Willow Way, Richmond, VA',
            tags: ['loser', 'nice'],
            actions: 'Edit | Delete'
        },
        {
            name: 'Ella Phillips',
            age: 26,
            address: '450 Magnolia Ln, Kansas City, MO',
            tags: ['teacher'],
            actions: 'Edit | Delete'
        },
        {
            name: 'Sebastian Parker',
            age: 33,
            address: '765 Hemlock Ct, Omaha, NE',
            tags: ['developer', 'nice'],
            actions: 'Edit | Delete'
        },
        {
            name: 'Avery Evans',
            age: 30,
            address: '234 Redwood Dr, Louisville, KY',
            tags: ['loser'],
            actions: 'Edit | Delete'
        },
        {
            name: 'Jack Edwards',
            age: 38,
            address: '900 Juniper Ln, Oklahoma City, OK',
            tags: ['teacher', 'nice', 'developer'],
            actions: 'Edit | Delete'
        },
        {
            name: 'Grace Collins',
            age: 31,
            address: '104 Chestnut St, Milwaukee, WI',
            tags: ['nice'],
            actions: 'Edit | Delete'
        },
        {
            name: 'Wyatt Stewart',
            age: 35,
            address: '622 Walnut Blvd, New Orleans, LA',
            tags: ['loser', 'developer'],
            actions: 'Edit | Delete'
        },
        {
            name: 'Chloe Sanchez',
            age: 27,
            address: '310 Palm St, Las Vegas, NV',
            tags: ['teacher', 'nice'],
            actions: 'Edit | Delete'
        },
        {
            name: 'Leo Morris',
            age: 42,
            address: '780 Dogwood Dr, Anchorage, AK',
            tags: ['developer'],
            actions: 'Edit | Delete'
        },
        {
            name: 'Lily Rogers',
            age: 29,
            address: '389 Maple Ct, Honolulu, HI',
            tags: ['nice'],
            actions: 'Edit | Delete'
        },
        {
            name: 'Gabriel Reed',
            age: 36,
            address: '119 Aspen Ave, Des Moines, IA',
            tags: ['teacher', 'loser'],
            actions: 'Edit | Delete'
        },
        {
            name: 'Zoey Cook',
            age: 28,
            address: '701 Pineapple Blvd, Miami, FL',
            tags: ['nice', 'developer'],
            actions: 'Edit | Delete'
        },
        {
            name: 'Lincoln Bell',
            age: 34,
            address: '203 Glacier Rd, Juneau, AK',
            tags: ['loser', 'developer'],
            actions: 'Edit | Delete'
        },
        {
            name: 'Nora Murphy',
            age: 25,
            address: '599 Sunset Blvd, Santa Fe, NM',
            tags: ['nice'],
            actions: 'Edit | Delete'
        },
        {
            name: 'Owen Bailey',
            age: 40,
            address: '812 Ocean Dr, Jacksonville, FL',
            tags: ['teacher'],
            actions: 'Edit | Delete'
        },
        {
            name: 'Hazel Rivera',
            age: 32,
            address: '340 Harbor Rd, Long Beach, CA',
            tags: ['developer'],
            actions: 'Edit | Delete'
        },
        {
            name: 'Matthew Hayes',
            age: 37,
            address: '743 Shoreline St, Sacramento, CA',
            tags: ['nice'],
            actions: 'Edit | Delete'
        },
        {
            name: 'Layla Jenkins',
            age: 26,
            address: '128 Coral Ct, Tampa, FL',
            tags: ['loser', 'developer'],
            actions: 'Edit | Delete'
        },
        {
            name: 'Jackson Bryant',
            age: 39,
            address: '901 Island View Rd, Key West, FL',
            tags: ['teacher', 'nice'],
            actions: 'Edit | Delete'
        },
        {
            name: 'Victoria Fisher',
            age: 33,
            address: '430 Seaside Blvd, San Jose, CA',
            tags: ['developer'],
            actions: 'Edit | Delete'
        },
        {
            name: 'Carter Gray',
            age: 35,
            address: '678 Sunrise Ln, Reno, NV',
            tags: ['nice', 'loser'],
            actions: 'Edit | Delete'
        },
        {
            name: 'Penelope Butler',
            age: 29,
            address: '115 Sunset Dr, Tucson, AZ',
            tags: ['teacher'],
            actions: 'Edit | Delete'
        },
        {
            name: 'Grayson Simmons',
            age: 31,
            address: '789 Desert Rd, El Paso, TX',
            tags: ['developer', 'nice'],
            actions: 'Edit | Delete'
        },
        {
            name: 'Aria Foster',
            age: 27,
            address: '321 Cactus Ct, Las Cruces, NM',
            tags: ['loser'],
            actions: 'Edit | Delete'
        },
        {
            name: 'Julian Powell',
            age: 38,
            address: '876 Rockridge Dr, Colorado Springs, CO',
            tags: ['nice'],
            actions: 'Edit | Delete'
        },
        {
            name: 'Savannah Russell',
            age: 34,
            address: '245 Pine Hills Rd, Denver, CO',
            tags: ['teacher', 'developer'],
            actions: 'Edit | Delete'
        },
        {
            name: 'Anthony Griffin',
            age: 36,
            address: '934 Canyon Blvd, Salt Lake City, UT',
            tags: ['nice'],
            actions: 'Edit | Delete'
        },
        {
            name: 'Riley Patterson',
            age: 30,
            address: '452 Meadow St, Bozeman, MT',
            tags: ['developer', 'loser'],
            actions: 'Edit | Delete'
        },
        {
            name: 'Lillian Stephens',
            age: 25,
            address: '609 Prairie View Rd, Fargo, ND',
            tags: ['teacher'],
            actions: 'Edit | Delete'
        },
        {
            name: 'Hudson Bennett',
            age: 40,
            address: '287 Riverbend Ln, Madison, WI',
            tags: ['nice', 'developer'],
            actions: 'Edit | Delete'
        }
    ]);

    return {
        tableData
    };
}
