
export interface IData {
     technology: string,
     porcentual: number;
}


interface If {
     frontend: Array<IData>,
     backend: Array<IData>,
     deploy: Array<IData>
}

export const data: If = {
     frontend:
          [{
               technology: 'HTML',
               porcentual: 92

          }, {
               technology: 'CSS',
               porcentual: 87

          },
          {
               technology: 'Javascript',
               porcentual: 96

          },
          {
               technology: 'React',
               porcentual: 98

          },
          {
               technology: 'Redux & Redux Toolkit',
               porcentual: 89

          },
          {
               technology: 'Typescript',
               porcentual: 80

          },
          {
               technology: 'Nextjs',
               porcentual: 85

          },
          {
               technology: 'Mui, tailwindcss, Bootstrap & other css frameworks',
               porcentual: 85

          }
          ],
     backend: [
          {
               technology: 'NodeJs',
               porcentual: 90
          },
          {
               technology: 'Express',
               porcentual: 87
          },
          {
               technology: 'MongoDB',
               porcentual: 85
          },
          {
               technology: 'PosgreSQL',
               porcentual: 90
          },
          {
               technology: 'Socket.io',
               porcentual: 88
          },
          {
               technology: 'Nestjs',
               porcentual: 94
          },
          {
               technology: 'Json Web Token',
               porcentual: 87
          }
     ],
     deploy: [
          {
               technology: 'Git',
               porcentual: 94
          },
          {
               technology: 'Heroku',
               porcentual: 87
          },
          {
               technology: 'Netlify',
               porcentual: 87
          },
          {
               technology: 'Docker',
               porcentual: 80
          }
     ]
}