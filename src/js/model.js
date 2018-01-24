export const square = [
  [//face A
    [-10, -10, 0],
    [ 10, -10, 0],
    [ 10,  10, 0],
    [-10,  10, 0],
  ],
];


export const doubleSquare = [
  [//face A
    [-10, -10, 0],
    [10, -10, 0],
    [10, 10, 0],
    [-10, 10, 0],
  ],
  [//face A
    [-10, -10, -10],
    [10, -10, -10],
    [10, 10, -10],
    [-10, 10, -10],
  ],
];

export const pyramid = [
  [//face A
    [-10, 10, 10],
    [-10, 10, -10],
    [10, 10, -10],
    [10, 10, 10],
  ],

  [//face A
    [-10, 10, 10],
    [0, -10, 0],
  ],
  [
    [-10, 10, -10],
    [0, -10, 0],
  ],
  [
    [10, 10, -10],
    [0, -10, 0],
  ],
  [
    [10, 10, 10],
    [0, -10, 0],
  ]
];

export const cube = [
  [//face A
    [-10, -10, 10],
    [10, -10, 10],
    [10, 10, 10],
    [-10, 10, 10],
  ],
  [//face A
    [-10, -10, -10],
    [10, -10, -10],
    [10, 10, -10],
    [-10, 10, -10],
  ],

  [//line A
    [-10, -10, 10],
    [-10, -10, -10]
  ],

  [//line B
    [10, -10, 10],
    [10, -10, -10]
  ],

  [//line C
    [10, 10, 10],
    [10, 10, -10]
  ],

  [//line D
    [-10, 10, 10],
    [-10, 10, -10]
  ],
];