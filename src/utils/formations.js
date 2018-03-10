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
          { label: 'GK',  top: '42%',  left: '3%'},
        ],
        [
          { label: 'LB',  top: '8%',  left: '20%'},
          { label: 'LCB', top: '30%', left: '20%'},
          { label: 'RCB', top: '55%', left: '20%'},
          { label: 'RB',  top: '78%', left: '20%'}
        ],
        [
          { label: 'LM',  top: '8%',  left: '45%'},
          { label: 'LCM', top: '30%', left: '45%'},
          { label: 'LCM', top: '55%', left: '45%'},
          { label: 'RM',  top: '78%', left: '45%'}
        ],
        [
          { label: 'LS',  top: '30%', left: '70%'},
          { label: 'RS',  top: '55%', left: '70%'}
        ]
      ];

    case '4-1-4-1':
      return [
        [
          { label: 'GK',  top: '42%',  left: '3%'},
        ],
        [
          { label: 'LB',  top: '8%',  left: '20%'},
          { label: 'LCB', top: '30%', left: '20%'},
          { label: 'RCB', top: '55%', left: '20%'},
          { label: 'RB',  top: '78%', left: '20%'}
        ],
        [
          { label: 'CDM', top: '42%', left: '35%'},
        ],
        [
          { label: 'LM',  top: '8%',  left: '50%'},
          { label: 'LCM', top: '30%', left: '50%'},
          { label: 'LCM', top: '55%', left: '50%'},
          { label: 'RM',  top: '78%', left: '50%'}
        ],
        [
          { label: 'S',   top: '42%', left: '70%'}
        ]
      ];

    case '4-2-3-1':
      return [
        [
          { label: 'GK',  top: '42%',  left: '3%'},
        ],
        [
          { label: 'LB',  top: '8%',  left: '20%'},
          { label: 'LCB', top: '30%', left: '20%'},
          { label: 'RCB', top: '55%', left: '20%'},
          { label: 'RB',  top: '78%', left: '20%'}
        ],
        [
          { label: 'LDM', top: '30%', left: '40%'},
          { label: 'RDM', top: '55%', left: '40%'},
        ],
        [
          { label: 'LAM', top: '14%', left: '55%'},
          { label: 'CAM', top: '42%', left: '55%'},
          { label: 'RAM', top: '72%', left: '55%'}
        ],
        [
          { label: 'S',   top: '42%', left: '70%'}
        ]
      ];

    case '4-3-3':
      return [
        [
          { label: 'GK',  top: '42%',  left: '3%'},
        ],
        [
          { label: 'LB',  top: '8%',   left: '20%'},
          { label: 'LCB', top: '30%',  left: '20%'},
          { label: 'RCB', top: '55%',  left: '20%'},
          { label: 'RB',  top: '78%',  left: '20%'}
        ],
        [
          { label: 'LM',  top: '18%',  left: '45%'},
          { label: 'CM',  top: '42%',  left: '45%'},
          { label: 'RM',  top: '68%',  left: '45%'},
        ],
        [
          { label: 'LW',  top: '12%',  left: '67%'},
          { label: 'CF',  top: '42%',  left: '72%'},
          { label: 'RW',  top: '74%',  left: '67%'}
        ]
      ];

    case '3-4-3':
      return [
        [
          { label: 'GK',  top: '42%',  left: '3%'},
        ],
        [
          { label: 'LCB', top: '18%',  left: '18%'},
          { label: 'CB',  top: '42%',  left: '18%'},
          { label: 'RCB', top: '68%',  left: '18%'},
        ],
        [
          { label: 'LM',  top: '8%',   left: '45%'},
          { label: 'LCM', top: '30%',  left: '45%'},
          { label: 'RCM', top: '55%',  left: '45%'},
          { label: 'RM',  top: '78%',  left: '45%'}
        ],
        [
          { label: 'LW',  top: '18%',   left: '67%'},
          { label: 'CF',  top: '42%',  left: '72%'},
          { label: 'RW',  top: '68%',  left: '67%'}
        ]
      ];

    default:
      return [];
  }

}
