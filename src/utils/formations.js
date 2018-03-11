export const formationTypes = {
  '4-4-2':   '4-4-2',
  '4-1-4-1': '4-1-4-1',
  '4-2-3-1': '4-2-3-1',
  '4-3-3':   '4-3-3',
  '3-4-3':   '3-4-3'
};

export function getFormation(type) {
  switch(type) {
    case '4-4-2': 
      return [
        [
          { label: 'GK',  top: '42%',  left: '3%', number: 1},
        ],
        [
          { label: 'LB',  top: '8%',  left: '20%', number: 3},
          { label: 'LCB', top: '30%', left: '20%', number: 6},
          { label: 'RCB', top: '55%', left: '20%', number: 5},
          { label: 'RB',  top: '78%', left: '20%', number: 2}
        ],
        [
          { label: 'LM',  top: '8%',  left: '45%', number: 11},
          { label: 'LCM', top: '30%', left: '45%', number: 8},
          { label: 'RCM', top: '55%', left: '45%', number: 4},
          { label: 'RM',  top: '78%', left: '45%', number: 7}
        ],
        [
          { label: 'LS',  top: '30%', left: '70%', number: 10},
          { label: 'RS',  top: '55%', left: '70%', number: 9}
        ]
      ];

    case '4-1-4-1':
      return [
        [
          { label: 'GK',  top: '42%',  left: '3%', number: 1},
        ],
        [
          { label: 'LB',  top: '8%',  left: '20%', number: 3},
          { label: 'LCB', top: '30%', left: '20%', number: 6},
          { label: 'RCB', top: '55%', left: '20%', number: 5},
          { label: 'RB',  top: '78%', left: '20%', number: 2}
        ],
        [
          { label: 'CDM', top: '42%', left: '35%', number: 4},
        ],
        [
          { label: 'LM',  top: '8%',  left: '50%', number: 11},
          { label: 'LCM', top: '30%', left: '50%', number: 10},
          { label: 'RCM', top: '55%', left: '50%', number: 8},
          { label: 'RM',  top: '78%', left: '50%', number: 7}
        ],
        [
          { label: 'ST',   top: '42%', left: '70%', number: 9}
        ]
      ];

    case '4-2-3-1':
      return [
        [
          { label: 'GK',  top: '42%',  left: '3%', number: 1},
        ],
        [
          { label: 'LB',  top: '8%',  left: '20%', number: 3},
          { label: 'LCB', top: '30%', left: '20%', number: 6},
          { label: 'RCB', top: '55%', left: '20%', number: 5},
          { label: 'RB',  top: '78%', left: '20%', number: 2}
        ],
        [
          { label: 'LDM', top: '30%', left: '40%', number: 8},
          { label: 'RDM', top: '55%', left: '40%', number: 4},
        ],
        [
          { label: 'LAM', top: '14%', left: '55%', number: 11},
          { label: 'CAM', top: '42%', left: '55%', number: 10},
          { label: 'RAM', top: '72%', left: '55%', number: 7}
        ],
        [
          { label: 'S',   top: '42%', left: '70%', number: 9}
        ]
      ];

    case '4-3-3':
      return [
        [
          { label: 'GK',  top: '42%', left: '3%', number: 1},
        ],
        [
          { label: 'LB',  top: '8%',  left: '20%', number: 3},
          { label: 'LCB', top: '30%', left: '20%', number: 6},
          { label: 'RCB', top: '55%', left: '20%', number: 5},
          { label: 'RB',  top: '78%', left: '20%', number: 2}
        ],
        [
          { label: 'LM',  top: '18%', left: '45%', number: 10},
          { label: 'CM',  top: '42%', left: '45%', number: 4},
          { label: 'RM',  top: '68%', left: '45%', number: 8},
        ],
        [
          { label: 'LW',  top: '12%', left: '67%', number: 11},
          { label: 'CF',  top: '42%', left: '72%', number: 9},
          { label: 'RW',  top: '74%', left: '67%', number: 7}
        ]
      ];

    case '3-4-3':
      return [
        [
          { label: 'GK',  top: '42%', left: '3%', number: 1},
        ],
        [
          { label: 'LCB', top: '18%', left: '18%', number: 6},
          { label: 'CB',  top: '42%', left: '18%', number: 4},
          { label: 'RCB', top: '68%', left: '18%', number: 5},
        ],
        [
          { label: 'LM',  top: '8%',  left: '45%', number: 3},
          { label: 'LCM', top: '30%', left: '45%', number: 10},
          { label: 'RCM', top: '55%', left: '45%', number: 8},
          { label: 'RM',  top: '78%', left: '45%', number: 2}
        ],
        [
          { label: 'LW',  top: '18%', left: '67%', number: 11},
          { label: 'CF',  top: '42%', left: '72%', number: 9},
          { label: 'RW',  top: '68%', left: '67%', number: 7}
        ]
      ];

    default:
      return [];
  }

}
