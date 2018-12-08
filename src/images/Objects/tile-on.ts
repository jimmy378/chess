import { colourArray } from '../../util/Models/colour';

export const tileOn = (
  topColour: colourArray,
  leftColour: colourArray,
  rightColour: colourArray
): Object => ({
  v: '5.2.0',
  fr: 25,
  ip: 0,
  op: 12,
  w: 286,
  h: 206,
  nm: 'tile-on',
  ddd: 0,
  assets: [],
  layers: [
    {
      ddd: 0,
      ind: 1,
      ty: 4,
      nm: 'TOP',
      sr: 1,
      ks: {
        o: { a: 0, k: 100, ix: 11 },
        r: { a: 0, k: 0, ix: 10 },
        p: { a: 0, k: [143, 103, 0], ix: 2 },
        a: { a: 0, k: [0, 0, 0], ix: 1 },
        s: { a: 0, k: [100, 100, 100], ix: 6 }
      },
      ao: 0,
      shapes: [
        {
          ind: 0,
          ty: 'sh',
          ix: 1,
          ks: {
            a: 1,
            k: [
              {
                i: { x: 0.2, y: 1 },
                o: { x: 0.167, y: 0.167 },
                n: '0p2_1_0p167_0p167',
                t: 0,
                s: [
                  {
                    i: [[0, 0], [0, 0], [0, 0], [0, 0]],
                    o: [[0, 0], [0, 0], [0, 0], [0, 0]],
                    v: [
                      [-142.643, 20.492],
                      [0.195, -61.75],
                      [142.643, 20.718],
                      [0, 102.925]
                    ],
                    c: true
                  }
                ],
                e: [
                  {
                    i: [[0, 0], [0, 0], [0, 0], [0, 0]],
                    o: [[0, 0], [0, 0], [0, 0], [0, 0]],
                    v: [
                      [-142.643, -20.758],
                      [0.195, -103],
                      [142.643, -20.532],
                      [0, 61.675]
                    ],
                    c: true
                  }
                ]
              },
              { t: 11 }
            ],
            ix: 2
          },
          nm: 'Path 1',
          mn: 'ADBE Vector Shape - Group',
          hd: false
        },
        {
          ty: 'fl',
          c: { a: 0, k: topColour, ix: 4 },
          o: { a: 0, k: 100, ix: 5 },
          r: 1,
          nm: 'topFill',
          mn: 'ADBE Vector Graphic - Fill',
          hd: false
        }
      ],
      ip: 0,
      op: 12,
      st: 0,
      bm: 0
    },
    {
      ddd: 0,
      ind: 2,
      ty: 4,
      nm: 'RIGHT',
      sr: 1,
      ks: {
        o: { a: 0, k: 100, ix: 11 },
        r: { a: 0, k: 0, ix: 10 },
        p: { a: 0, k: [143, 103, 0], ix: 2 },
        a: { a: 0, k: [0, 0, 0], ix: 1 },
        s: { a: 0, k: [100, 100, 100], ix: 6 }
      },
      ao: 0,
      shapes: [
        {
          ind: 0,
          ty: 'sh',
          ix: 1,
          ks: {
            a: 1,
            k: [
              {
                i: { x: 0.2, y: 1 },
                o: { x: 0.167, y: 0.167 },
                n: '0p2_1_0p167_0p167',
                t: 0,
                s: [
                  {
                    i: [[0, 0], [0, 0], [0, 0], [0, 0]],
                    o: [[0, 0], [0, 0], [0, 0], [0, 0]],
                    v: [
                      [142.643, 20.567],
                      [0, 103],
                      [-0.107, 102.925],
                      [142.535, 20.718]
                    ],
                    c: true
                  }
                ],
                e: [
                  {
                    i: [[0, 0], [0, 0], [0, 0], [0, 0]],
                    o: [[0, 0], [0, 0], [0, 0], [0, 0]],
                    v: [
                      [142.643, 20.567],
                      [0, 103],
                      [0, 61.675],
                      [142.643, -20.532]
                    ],
                    c: true
                  }
                ]
              },
              { t: 11 }
            ],
            ix: 2
          },
          nm: 'Path 1',
          mn: 'ADBE Vector Shape - Group',
          hd: false
        },
        {
          ty: 'fl',
          c: {
            a: 0,
            k: rightColour,
            ix: 4
          },
          o: { a: 0, k: 100, ix: 5 },
          r: 1,
          nm: 'rightFill',
          mn: 'ADBE Vector Graphic - Fill',
          hd: false
        }
      ],
      ip: 0,
      op: 12,
      st: 0,
      bm: 0
    },
    {
      ddd: 0,
      ind: 3,
      ty: 4,
      nm: 'LEFT',
      sr: 1,
      ks: {
        o: { a: 0, k: 100, ix: 11 },
        r: { a: 0, k: 0, ix: 10 },
        p: { a: 0, k: [143, 103, 0], ix: 2 },
        a: { a: 0, k: [0, 0, 0], ix: 1 },
        s: { a: 0, k: [100, 100, 100], ix: 6 }
      },
      ao: 0,
      shapes: [
        {
          ind: 0,
          ty: 'sh',
          ix: 1,
          ks: {
            a: 1,
            k: [
              {
                i: { x: 0.2, y: 1 },
                o: { x: 0.167, y: 0.167 },
                n: '0p2_1_0p167_0p167',
                t: 0,
                s: [
                  {
                    i: [[0, 0], [0, 0], [0, 0], [0, 0]],
                    o: [[0, 0], [0, 0], [0, 0], [0, 0]],
                    v: [
                      [-142.643, 20.567],
                      [0, 103],
                      [0, 103.175],
                      [-142.643, 20.742]
                    ],
                    c: true
                  }
                ],
                e: [
                  {
                    i: [[0, 0], [0, 0], [0, 0], [0, 0]],
                    o: [[0, 0], [0, 0], [0, 0], [0, 0]],
                    v: [
                      [-142.643, 20.567],
                      [0, 103],
                      [0, 61.675],
                      [-142.643, -20.758]
                    ],
                    c: true
                  }
                ]
              },
              { t: 11 }
            ],
            ix: 2
          },
          nm: 'Path 1',
          mn: 'ADBE Vector Shape - Group',
          hd: false
        },
        {
          ty: 'fl',
          c: {
            a: 0,
            k: leftColour,
            ix: 4
          },
          o: { a: 0, k: 100, ix: 5 },
          r: 1,
          nm: 'leftFill',
          mn: 'ADBE Vector Graphic - Fill',
          hd: false
        }
      ],
      ip: 0,
      op: 12,
      st: 0,
      bm: 0
    },
    {
      ddd: 0,
      ind: 4,
      ty: 4,
      nm: 'BASE',
      sr: 1,
      ks: {
        o: { a: 0, k: 100, ix: 11 },
        r: { a: 0, k: 0, ix: 10 },
        p: { a: 0, k: [143, 103, 0], ix: 2 },
        a: { a: 0, k: [0, 0, 0], ix: 1 },
        s: { a: 0, k: [100, 100, 100], ix: 6 }
      },
      ao: 0,
      shapes: [
        {
          ind: 0,
          ty: 'sh',
          ix: 1,
          ks: {
            a: 1,
            k: [
              {
                i: { x: 0.2, y: 1 },
                o: { x: 0.167, y: 0.167 },
                n: '0p2_1_0p167_0p167',
                t: 0,
                s: [
                  {
                    i: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
                    o: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
                    v: [
                      [0.213, -62],
                      [-142.625, 20.242],
                      [-142.643, 20.567],
                      [0, 103],
                      [142.643, 20.567],
                      [142.661, 20.468]
                    ],
                    c: true
                  }
                ],
                e: [
                  {
                    i: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
                    o: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
                    v: [
                      [0.195, -103],
                      [-142.643, -20.758],
                      [-142.643, 20.567],
                      [0, 103],
                      [142.643, 20.567],
                      [142.643, -20.532]
                    ],
                    c: true
                  }
                ]
              },
              { t: 11 }
            ],
            ix: 2
          },
          nm: 'Path 1',
          mn: 'ADBE Vector Shape - Group',
          hd: false
        },
        {
          ty: 'fl',
          c: { a: 0, k: topColour, ix: 4 },
          o: { a: 0, k: 100, ix: 5 },
          r: 1,
          nm: 'baseFill',
          mn: 'ADBE Vector Graphic - Fill',
          hd: false
        }
      ],
      ip: 0,
      op: 24,
      st: 0,
      bm: 0
    }
  ],
  markers: []
});
