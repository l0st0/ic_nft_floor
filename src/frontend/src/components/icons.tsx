import { SvgIcon, SvgIconProps } from '@mui/material';

export const ConnectIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon inheritViewBox {...props}>
      <path d='M 19 3 C 17.35499 3 16 4.3549904 16 6 C 16 6.4598564 16.114225 6.8919393 16.302734 7.2832031 L 12.585938 11 L 7.8125 11 C 7.3951413 9.8426699 6.2931586 9 5 9 C 3.3549904 9 2 10.35499 2 12 C 2 13.64501 3.3549904 15 5 15 C 6.2931586 15 7.3951413 14.15733 7.8125 13 L 12.585938 13 L 16.302734 16.716797 C 16.114225 17.108061 16 17.540143 16 18 C 16 19.64501 17.35499 21 19 21 C 20.64501 21 22 19.64501 22 18 C 22 16.35499 20.64501 15 19 15 C 18.540143 15 18.108061 15.114225 17.716797 15.302734 L 14.414062 12 L 17.716797 8.6972656 C 18.108061 8.8857754 18.540143 9 19 9 C 20.64501 9 22 7.6450096 22 6 C 22 4.3549904 20.64501 3 19 3 z M 19 5 C 19.564129 5 20 5.4358706 20 6 C 20 6.5641294 19.564129 7 19 7 C 18.435871 7 18 6.5641294 18 6 C 18 5.4358706 18.435871 5 19 5 z M 5 11 C 5.5641294 11 6 11.435871 6 12 C 6 12.564129 5.5641294 13 5 13 C 4.4358706 13 4 12.564129 4 12 C 4 11.435871 4.4358706 11 5 11 z M 19 17 C 19.564129 17 20 17.435871 20 18 C 20 18.564129 19.564129 19 19 19 C 18.435871 19 18 18.564129 18 18 C 18 17.435871 18.435871 17 19 17 z' />
    </SvgIcon>
  );
};

export const BeerIcon = (props: SvgIconProps) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' width={24} height={24} {...props}>
      <path
        fill='#FEBF10'
        d='M198.2 368.8c-2.4-21.6-6.2-43-10.2-64.3-2.1-11.1-4.3-22.2-6.7-33.3-1.1-5.4-1.9-10.9-2.7-16.4-1.8-.6-3.5-1.7-5-3.2-3.3-3.2-4.4-10.6-9.7-10.1-1 .1-1.8-.1-2.5-.4 0 .1-.1.1-.1.2-.8.9-2.1 1.7-3.4 1.7-.5 0-1.1 0-1.7-.1 1.6 9 2.2 18.2 2.8 27.1 1.5 22.5 5.4 44.2 9.2 66.4 4 23.6 7.8 48.4 3 72.2 0 .2-.1.4-.1.7 1-.8 2.3-1.2 4-.6 9.5 3.1 18.9 5.1 28.4 6.4-.7-15.4-3.5-31-5.3-46.3zm39.8-54.9c-.4-18.7-2.2-37.3-4.5-55.9-8.3-.3-15.2-3.3-22.7-6.8-3.4-1.6-6.9-3.8-10.8-3-3.7.8-5.9 2.5-9 4.6-.8.6-1.6 1-2.4 1.4 1 6.5 2 13 3.4 19.4 2.3 10.6 4.3 21.2 6.3 31.9 4 21.3 7.8 42.7 10.1 64.3 1.6 15.4 4.6 30.9 5 46.3 8.7.8 17.5 1.2 26.5 1.4h1.1c0-34.4-2.3-69-3-103.6z'
      />
      <path
        fill='#FEBF10'
        d='M385.2 414.4c-1-1.1-1.4-2.4-1.4-3.6-4.9-.4-9.7-1.3-14.3-2.8-2.5-.8-4.7-3-4-5.9.3-1.2.6-2.3 1.4-3.2.1-.2.3-.3.3-.4.6-1.6 1.9-2.6 3.3-2.9-4.7-10.5-8.7-23.7-3-32.6-2.1-1.4-3.8-3.3-5.2-5.6-6.2-10.5-1.3-20.7-1.4-31.8-.1-15.8-1.7-31.8-2.7-47.6-.8-12.3-1.4-24.7-1.7-37-1.3 1-3 1.3-4.9.2-2.7-1.5-4.9-3.4-7.2-5.4-.6-.5-1.2-1.1-2-1.4.1.1-.3.2-.8.5-.1 0-.1.1-.2.1-.7 1-1.8 1.8-3 2.1-.2.2-.4.3-.7.5.3.9.4 1.9.1 3-.7 2.9-3.2 4.7-5.7 6-2.2 1.1-4.6 2.4-7.2 3.5 6.9 51.6 15.4 103 15.8 155.2v2.5c2.6-.5 5.1-1.3 7.2-2.7 5.4-3.6 11 4.7 5.6 8.3-4.1 2.8-9.3 3.5-14.1 4.3-2.2.4-9.9.6-11.2 2.8-3.3 5.5-12.3 1.1-9-4.4 2.7-4.5 6.9-6 11.5-6.8-.1-52.8-8.6-104.9-15.6-157.1-1.2-.3-2.1-1-2.7-1.9-1.3.6-2.9.7-4.4 0-.4-.2-.9-.4-1.4-.6-.1 0-.2-.1-.5-.1-.6-.2-1.3-.3-1.9-.5-1.8-.6-3.4-1.2-4.9-2.5l-.3-.3c-.5-.1-1.1-.2-1.6-.4-1.5-.7-3.2-1.1-4.9-1 .2 1.1.1 2.3-.4 3.2-2.9 5.1-8.9 9.8-15.5 12.1 1.9 14.1 3.8 28.2 5.3 42.3 3.6 34.7 4.7 70.1 4.7 105 0 6.4-10 7.2-10 .8 0-35.5-1.1-71.6-4.9-106.9-1.4-13.2-3.2-26.4-5-39.6-2.2-.2-4.3-.8-6.2-1.8-4.5-2.4-8.3-5.9-12.9-8.2-2.3-1.1-4-1.5-5.3-1.2l1.2 9.9c2.1 18.2 4 36.5 4.2 54.9.3 34.2 3 68.4 3 102.7v.3c4.3.2 8.6.3 12.9.1 6.4-.2 14.5-.1 19.8-4.2 5.1-3.9 10.7 4.4 5.6 8.3-6 4.7-14.7 5.5-22 5.8-8.6.3-17.1-.2-25.7-.4-23.6-.5-46-1.7-68.6-9.1-1.8-.6-2.9-1.9-3.4-3.4-2.4 9.7-5.2 19.7-3.5 29.6 2 11.4 9.5 20.8 19.8 25.9 10.8 5.4 22.6 6.9 34.6 6.9 16.1 0 32.2.4 48.3.4 23.2 0 47.3.4 69.9-5.6 16-4.3 33-10.4 45.6-21.5 4.7-4.2 9.1-9.7 9.8-16.2 1.1-8-3.6-15.2-8.6-20.6z'
      />
      <path
        fill='#D6E5E5'
        d='M327.2 107.9c-6.2 1.6-9.5-7.8-3.3-9.4 3.9-1 6.3-3.7 6.9-7.8.4-2.5.6-6.2-1.5-8.1-4.1-3.8-10.6-3.1-15.6-1.7-3.2.8-6.3-1-6.6-4.3-.7-6.5.2-15.7-4.2-21.2-6.1-7.7-17.3-3.5-24.8-.9-4.3 1.5-8.8 2.8-13.1 4.1-2.1.7-4.5 1.5-6.8.8-2.5-.7-3.8-2.4-5.1-4.5-1.9-3-4.5-5.3-7.1-7.7-5.9-5.3-12.6-10.3-20.5-12.1-8.2-1.9-17-1.7-25.2.4-13.3 3.4-29.5 10.6-28.7 26.7.2 3.8-3.7 6.6-7.2 4.9-19-9.2-43.6-.2-58.7 12.7-6.9 5.9-13.4 14-14.3 23.4-.9 10.1 6.3 17.7 14 23.1 2.6 1.8 2.1 6.4-.5 7.9C97 138.8 89.1 146 90.2 156c1.1 9.6 7.9 17.1 15.1 22.9 1.7 1.4 2.1 4 1.2 6-4.7 9.6-9.7 25.8 2.2 32.3 1.7.9 2.5 2.4 2.6 3.9 22.3-2 23.8-30 15.9-47.2-1-2.3.6-5.8 3.1-6.4 12.3-2.7 37.2-22.6 23.9-35.2-.5-.4-1.1-.9-1.6-1.3-4.7-4.5 1.5-11.4 6.6-7.5.4.3.8.6 1.1.9 3.9 2.7 12.4 5.7 15.2 1.7-.2-.6-.3-1.2-.3-1.8-2.2-.6-4-2.6-3.3-5.5 1.8-6.8 7.5-12.8 14.4-14.3 3.4-2.6 7.9-3.1 11.8.3 2 1.7 3.5 3.8 4.6 6.1 1.5 2.7 2.1 6.1 1.4 9.9-1.1 6.4-10.7 4.4-9.8-1.9.2-1.2-.1-2.4-.5-3.5-.6-.8-1.7-1.2-2.9-1.2-1.2 1.3-2.9 1.6-4.4 1.4-1.3.7-2.4 1.6-3.3 2.6 1.7.4 3.1 1.7 3.1 4 11.1 5.1 24.8 4.9 36.7 4.8 17.4-.1 34.7 1.7 52.1.5 12-.8 24.4-1.7 35.9-5.6 8.5-2.8 17.2-7.2 20.4-15.7-1.1.6-2.6 1.2-4.2 1.7zM188.4 91.8c-.7 4.5-3.4 8.6-7.7 10.4-5.6 2.3-11.6-.7-16.1-4-1.8-1.3-2.1-4-1.1-6-.9-1.8-.5-3.9.7-5.6 2.2-3 4.7-6 7.9-8 2.5-1.5 5-2.3 7.9-2 2.5.2 4.5 1.8 6.1 3.7 2.4 3 2.9 7.7 2.3 11.5zm47.8-6.4c-2.4 16.3-31.7 25.6-34.4 4.8-.2-1.9.4-3.2 1.5-4.1.7-8.4 7.7-15.6 16.1-16.8 9.4-1.3 18.2 6.5 16.8 16.1zm31.3 37c-7.3 2.6-14.9-.3-18.3-7.1-1.4-.6-2.4-1.9-2.3-4 .2-7.1 3.5-15.5 11.3-17.2 7-1.5 14 1.2 16.9 8.1 3.2 7.5.6 17.2-7.6 20.2zm34.6-33.9c-.8 2.8-2.5 4.8-5.2 6-2.3 1-5.1.8-7.4.4-3.4-.7-6.7-2-9.8-3.5-2.5-1.2-3.4-4.3-2.3-6.7-.5-1-.7-2.1-.4-3.2.9-3.5 2.3-6.4 5.1-8.8 2-1.7 4.6-2.1 7.1-1.9 2.2.2 4.2 1.3 5.9 2.6 3 2.1 5.5 5.6 6.6 9.1.5 1.8.9 4.1.4 6z'
      />
      <path
        fill='#D6E5E5'
        d='m259.4 196.1-3.3.3c-10.6.9-21.2.5-31.8.3-13.4-.3-26.9 1.4-40.4 1.4-7.5 0-14.9-.5-22.3-1.8-6.7-1.1-13.3-2.4-20.1-2.7 0 4.4-.6 8.8-1.6 13 .8.3 1.6.8 2.3 1.7 5.8 7.4 9.5 15.8 11.9 24.7h.1l1.8-.9c.9-.3 1.8-.5 2.7-.5.9 0 1.8.1 2.6.5.5-.3 1.2-.5 1.9-.5 5.1-.5 8.9 1.3 11.8 4.6-1-4.3-2.1-8.5-3.2-12.8-1-3.8-2.4-8-2.7-11.9-.5-6.4 9.5-7.2 10-.8.3 3.2 2.1 8.8 3.1 12.8 1.5 6 3.1 12 4.3 18 .2.8.3 1.6.5 2.3 1.1-.9 2.2-2 3.2-2.6 14.8-9 26.7 4.8 40.9 6.6.3-.5.6-1 1-1.5-.8-5.4-1.8-10.7-3.2-16-1.9-7.7-3.5-15.2-2.7-23.2.6-6.4 10.4-4.5 9.8 1.9-.6 6.3.8 12.4 2.4 18.4.4-1.8 1.8-3.3 4.3-3.3 6.4 0 7.2 10 .8 10-1.7 0-3-.7-3.8-1.7.1.4.2.8.3 1.3.5 2.1.9 4.2 1.3 6.3.3 0 .6-.1.9-.1 5.1-.2 9.7 1.9 13.8 4.6 2.5 1.6 6.5 5.4 9.8 6.5-2.6-18.2-5-36.5-6.4-54.9zM213.4 88c.1 1.4-.3 2.5-.9 3.3 2.7 4.1 12.8-2.3 13.7-6.3 2.1-9.2-13.5-5.9-12.8 3zm-34.9-.5-.3-.9c-.1 0-.2.1-.3.1-.4.2-.8.5-1.2.8-.2.2-.4.3-.6.5-.5.4-.9.9-1.3 1.3-.7.8-1.3 1.5-2 2.3.1.1.2.1.3.2.6.3 1.1.6 1.7.8l1.5.3h.5c.1 0 .2-.1.2-.1.1-.1.3-.2.4-.3l.2-.2c0-.1.1-.1.1-.2.2-.3.3-.7.5-1 .2-.6.3-1.3.4-2 0-.4 0-1-.1-1.6zm113.2-3c-.3-.5-.5-.9-.8-1.3-.2-.3-.4-.5-.6-.7-.3-.4-.7-.7-1.1-1.1-.1-.1-.3-.2-.5-.4-.2-.1-.5-.3-.7-.4l-.2.2c-.3.6-.6 1.2-.9 1.9-.1.2-.1.4-.2.6 0 .1-.1.2-.1.2.7.3 1.5.6 2.3.9 1 .3 2 .6 3 .7 0-.2-.1-.4-.2-.6z'
      />
      <path
        fill='#D6E5E5'
        d='M439 313.1c0-15.8 0-31.6-.8-47.3-.7-13.7-1.8-27.4-4.4-40.8-2.2-11.4-5.3-23.4-11.8-33.1-7-10.6-16.9-16.6-29.6-17.8-12.2-1.2-24.5 1-36.4 3.8-.8.5-1.6 1-2.3 1.4-5.5 3.1-11-4.8-5.9-8.1.5-1 1.4-1.9 3-2.3.2-.1.4-.1.6-.1l2.1-1.8c.1-14.1.6-28 0-42.2-.2-5.2-1.1-10.8-3.8-15.3-1.4-2.3-2.9-4.4-5-6 .4.3-.3.1-.8-.1-.4.2-.9.3-1.4.4v.3c-4.3 27.4-40.4 31.2-62.5 32.9-19.2 1.4-38.2-.2-57.4-.2-12.7 0-27.1 0-39.1-5.1-3.4 4.6-9.3 6.4-15.4 6 1.6 15-14.8 31.9-29.4 37.8.9 2.7 1.6 5.5 2.1 8.4 13.7.5 26.9 4.5 40.7 4.5 7.8 0 15.6 0 23.4-.4 5.6-.3 11.2-1.1 16.8-1 10 .2 20 .7 30 0 7.2-.5 18.1-.6 23.8-5.9 4.7-4.4 12.2 2.2 7.5 6.6-3.8 3.5-8.5 5.7-13.5 7 1.4 18.5 3.8 36.9 6.4 55.2 2.6-1.1 5.1-2.6 6.8-4.6-.9-3.8.5-7.6 4.8-9.3 4.8-1.9 10.4-1.1 15 .9.6.3 1.2.7 1.6 1.1.9.1 1.8.5 2.5 1.2.1 0 .2.1.3.1.3.1 1.1.3 1.2.4 1.7.5 3.3 1 4.9 1.7.5.2 1 .6 1.3 1-2-15.4-3.8-30.7-5.2-46.2-.7.4-1.5.6-2.5.6-6.4 0-7.2-10-.8-10 1.8 0 3.1.7 4 1.8 2.5-2.9 8.5-2.2 8.9 2.8.4 4.4.8 8.9 1.2 13.3 1.8 1.8 2.1 5 .7 6.9 1 9.4 2.1 18.7 3.4 28.1.1 0 .1-.1.2-.1 1.2-.5 1.9-.8 2.7-1.2v-.4c-.4-1.6-.2-3.4 1-4.6 2-2 4.4-4.6 7.2-5.7.3-.4.7-.8 1.2-1.1 3.6-2.5 7.8-3 11.7-.7 3 1.8 5.2 4.7 8.3 6.4.1.1.2.1.3.2v-2.8c0-3.8 3.5-5.6 6.4-5.1 0-1.4.6-2.8 1.8-3.9 21.4-18.6 38.1 19.9 42.6 35.4 7 23.6 9.6 48.5.6 71.8-2.9 7.4-6.6 14.6-11 21.2-3.7 5.5-8.4 11.9-14.6 14.9-.5 1.2-1.5 2.3-2.9 3-10.2 4.6 1.8 25.8 4.9 32 .4.7.5 1.4.6 2.1 5.5.4 11.1.1 16.6-1.1 10.3-2.1 20.9-6.9 27.8-15.1 7.8-9.3 9.6-21.9 10.1-33.7.3-12.9-.5-25.5-.5-38.1zm-141.4-84.9c-.8.9-2.1 1.7-3.4 1.7h-1.5c-1.4 0-2.6-.3-3.7-1.2-1-.9-1.6-2.1-1.7-3.4-.1-1.3.3-2.7 1.2-3.7.8-.9 2.1-1.7 3.4-1.7h1.5c1.4 0 2.6.3 3.7 1.2 1 .9 1.6 2.1 1.7 3.4.2 1.3-.3 2.7-1.2 3.7zm-3.3-48.8c-6.9.3-13.1-3.3-15.6-9.9 0-.1 0-.1-.1-.2-2.5-.9-4.4-3.6-2.7-6.7 3.6-6.5 10.7-10 18-9.2 6.4.6 12.8 5.6 12.4 12.6-.2 6.9-4.6 13.1-12 13.4zm34.6-8.9c0 1.4-.3 2.6-1.2 3.7-.9 1-2.1 1.6-3.4 1.7-1.3.1-2.7-.3-3.7-1.2-.9-.8-1.7-2.1-1.7-3.4v-1.5c0-1.4.3-2.6 1.2-3.7.9-1 2.1-1.6 3.4-1.7 1.3-.1 2.7.3 3.7 1.2.9.8 1.7 2.1 1.7 3.4v1.5zm-63.7-65.6c-1.2-1.5-3-1.8-4.8-1-1.9.8-3 2.9-3.4 5.1.4.5.8 1 1.1 1.7 1.1 2.8 4.5 3.6 6.9 1.8 2.2-1.7 1.8-5.6.2-7.6z'
      />
      <path fill='#D6E5E5' d='M296.3 165.6c-1.3-3.5-6-2.7-9-.8.3.4.6.9.8 1.4 1.5 3.9 10 4.5 8.2-.6z' />
      <path
        fill='#010101'
        d='M449.4 331.4c-.7-29.4.3-59-2.7-88.3-2.3-22.6-6.9-47.7-22.7-65.1-15.2-16.6-39.2-15.9-60.3-11.9v-1.2c0-3.2.2-6.3.3-9.5.4-10.9.1-21.6-.4-32.5-.3-7.9-2.9-16-7.7-22.3-3-4-9.5-9.1-15.1-7.5 1-4.5.6-9.3-1.4-13.4-4.3-8.7-13.8-10.4-22.6-9.4-.6-6.4-1.2-12.8-4.2-18.7-4.4-8.7-15.6-11.5-24.5-10.2-9.1 1.3-17.6 6.3-26.5 8.1-.9-1.3-1.8-2.6-2.8-3.8-3.3-3.8-7.2-7.2-11.2-10.3-15.6-12.3-35-13.7-53.7-8.3-14.7 4.2-28.6 13.6-31.5 28.5-22.2-6.8-47.8 3.4-64.5 18.2-8.6 7.6-15.5 18.1-16.2 29.8-.6 10.5 4.8 19.5 12.2 26.3-7.8 6.1-13.1 14.3-13.4 24.7-.4 11.6 7.4 22 15.8 29.5-6 14.3-7.6 32.5 7.3 41.5 0 2.6 1.8 5.5 5.2 5.6 13.2.5 22.2-5.6 27.4-14.5 13.4 19.4 12.4 45.3 14.2 67.9 2 26.3 8.9 52 11.9 78.1 1.6 13.6 2.2 27.5 0 41.1-2.2 13.5-7.1 26.3-5.9 40.2 2.3 26.3 27 40.2 50.8 43.1 14.3 1.7 29.1.8 43.4.9 16.2.2 32.4.2 48.6-.4 19.4-.8 37.6-3.2 56-9.6 15.3-5.3 31.9-12.9 42.3-25.9 10.5-13.1 8-28.8-1.9-41.2 12.8-1.1 25.3-5.7 35.2-13.5 19.4-15.9 19.1-42.9 18.6-66zM127.3 173.8c7.8 17.2 6.3 45.2-15.9 47.2-.1-1.5-.9-3-2.6-3.9-11.9-6.4-6.9-22.7-2.2-32.3 1-1.9.6-4.6-1.2-6-7.2-5.8-14.1-13.3-15.1-22.9-1.1-10 6.8-17.1 14.6-21.7 2.6-1.5 3.1-6.1.5-7.9-7.7-5.4-14.9-13-14-23.1.8-9.4 7.4-17.5 14.3-23.4 15.1-12.9 39.7-21.9 58.7-12.7 3.5 1.7 7.4-1.1 7.2-4.9-.8-16.1 15.5-23.3 28.7-26.7 8.1-2.1 17-2.3 25.2-.4 7.9 1.8 14.6 6.8 20.5 12.1 2.6 2.3 5.2 4.7 7.1 7.7 1.3 2.1 2.6 3.8 5.1 4.5 2.2.6 4.6-.2 6.8-.8 4.4-1.3 8.8-2.6 13.1-4.1 7.5-2.6 18.7-6.8 24.8.9 4.3 5.4 3.5 14.7 4.2 21.2.4 3.4 3.5 5.2 6.6 4.3 5-1.3 11.5-2.1 15.6 1.7 2.1 1.9 1.9 5.6 1.5 8.1-.6 4-3 6.7-6.9 7.8-6.2 1.6-2.9 11 3.3 9.4 1.6-.4 3.1-1.1 4.4-1.9-3.2 8.5-11.9 12.9-20.4 15.7-11.5 3.8-23.9 4.7-35.9 5.6-17.4 1.2-34.7-.6-52.1-.5-11.9.1-25.5.3-36.7-4.8 0-2.3-1.4-3.6-3.1-4 .9-1 2.1-1.9 3.3-2.6 1.5.3 3.2-.1 4.4-1.4 1.2 0 2.3.3 2.9 1.2.5 1.1.7 2.4.5 3.5-.9 6.3 8.7 8.3 9.8 1.9.6-3.9.1-7.2-1.4-9.9-1.1-2.3-2.6-4.4-4.6-6.1-4-3.4-8.4-2.9-11.8-.3-7 1.5-12.7 7.5-14.4 14.3-.8 2.9 1 4.9 3.3 5.5 0 .6.1 1.2.3 1.8-2.8 3.9-11.3 1-15.2-1.7-.4-.3-.7-.6-1.1-.9-5.1-3.9-11.3 3.1-6.6 7.5.5.5 1 .9 1.6 1.3 13.3 12.6-11.6 32.5-23.9 35.2-2.6.7-4.2 4.2-3.2 6.5zm26.8 59.2s0 .1 0 0c-2.5-8.9-6.1-17.3-12-24.7-.7-.9-1.5-1.4-2.3-1.7 1.1-4.1 1.6-8.5 1.6-13 6.8.3 13.4 1.6 20.1 2.7 7.4 1.2 14.8 1.8 22.3 1.8 13.5 0 27-1.7 40.4-1.4 10.6.3 21.2.6 31.8-.3l3.3-.3c1.5 18.4 3.8 36.7 6.3 54.9-3.2-1.1-7.3-4.9-9.8-6.5-4.2-2.7-8.8-4.8-13.8-4.6-.3 0-.6 0-.9.1-.4-2.1-.8-4.2-1.3-6.3-.1-.4-.2-.8-.3-1.3.9 1 2.2 1.7 3.8 1.7 6.4 0 5.6-10-.8-10-2.5 0-3.9 1.5-4.3 3.3-1.5-6-3-12.2-2.4-18.4.6-6.4-9.2-8.3-9.8-1.9-.8 8 .7 15.5 2.7 23.2 1.3 5.3 2.3 10.6 3.2 16-.3.5-.7 1-1 1.5-14.2-1.8-26.2-15.6-40.9-6.6-1 .6-2.1 1.6-3.2 2.6-.2-.8-.3-1.6-.5-2.3-1.2-6-2.8-12-4.3-18-1-4-2.8-9.6-3.1-12.8-.5-6.4-10.5-5.7-10 .8.3 4 1.8 8.1 2.7 11.9 1.1 4.3 2.1 8.5 3.2 12.8-2.9-3.3-6.7-5.1-11.8-4.6-.7.1-1.3.3-1.9.5-.8-.4-1.7-.6-2.6-.5-.9 0-1.8.3-2.7.5-.5.3-1.1.6-1.7.9zM241 417.7h-1.1c-9-.2-17.8-.6-26.5-1.4-.5-15.5-3.4-31-5-46.3-2.3-21.6-6-43-10.1-64.3-2-10.7-4-21.3-6.3-31.9-1.4-6.4-2.4-12.9-3.4-19.4.8-.4 1.7-.9 2.4-1.4 3-2.1 5.2-3.9 9-4.6 3.9-.8 7.4 1.4 10.8 3 7.5 3.5 14.4 6.4 22.7 6.8 2.2 18.6 4.1 37.2 4.5 55.9.7 34.4 3 69 3 103.6zm-82-147.6c-.6-8.9-1.2-18.1-2.8-27.1.6.1 1.1.1 1.7.1 1.2 0 2.6-.8 3.4-1.7.1-.1.1-.1.1-.2.7.3 1.5.5 2.5.4 5.3-.5 6.5 7 9.7 10.1 1.5 1.5 3.2 2.5 5 3.2.8 5.5 1.6 11 2.7 16.4 2.3 11.1 4.6 22.1 6.7 33.3 4 21.3 7.8 42.7 10.2 64.3 1.7 15.3 4.5 30.9 5.2 46.3-9.5-1.3-18.9-3.3-28.4-6.4-1.7-.6-3-.2-4 .6 0-.2.1-.4.1-.7 4.9-23.7 1.1-48.6-3-72.2-3.7-22.2-7.6-43.9-9.1-66.4zm235.1 164.6c-.7 6.5-5 12-9.8 16.2-12.6 11.1-29.6 17.1-45.6 21.5-22.6 6.1-46.7 5.6-69.9 5.6-16.1 0-32.2-.3-48.3-.4-11.9 0-23.8-1.5-34.6-6.9-10.3-5.1-17.8-14.5-19.8-25.9-1.7-9.9 1.1-19.9 3.5-29.6.5 1.5 1.6 2.8 3.4 3.4 22.6 7.4 45 8.6 68.6 9.1 8.6.2 17.1.8 25.7.4 7.4-.3 16-1.1 22-5.8 5.1-3.9-.5-12.2-5.6-8.3-5.3 4.1-13.4 4-19.8 4.2-4.3.1-8.6 0-12.9-.1v-.3c0-34.3-2.7-68.5-3-102.7-.2-18.3-2-36.7-4.2-54.9l-1.2-9.9c1.4-.4 3.1 0 5.3 1.2 4.6 2.3 8.4 5.8 12.9 8.2 1.9 1 4 1.6 6.2 1.8 1.8 13.2 3.6 26.4 5 39.6 3.8 35.3 4.9 71.4 4.9 106.9 0 6.4 10 5.6 10-.8 0-34.9-1.1-70.2-4.7-105-1.4-14.1-3.3-28.2-5.3-42.3 6.6-2.3 12.6-7 15.5-12.1.6-1 .6-2.1.4-3.2 1.7-.1 3.4.3 4.9 1 .6.2 1.1.4 1.6.4l.3.3c1.5 1.3 3 1.9 4.9 2.5.6.2 1.3.4 1.9.5.3.1.4.1.5.1.5.2.9.4 1.4.6 1.4.7 3 .6 4.4 0 .6.9 1.5 1.6 2.7 1.9 7 52.2 15.6 104.3 15.6 157.1-4.6.8-8.8 2.3-11.5 6.8-3.4 5.5 5.6 9.9 9 4.4 1.3-2.2 9-2.4 11.2-2.8 4.8-.8 10-1.5 14.1-4.3 5.4-3.6-.2-11.9-5.6-8.3-2.1 1.4-4.6 2.2-7.2 2.7V405c-.4-52.1-8.9-103.6-15.8-155.2 2.6-1.1 5-2.3 7.2-3.5 2.5-1.3 5-3.2 5.7-6 .3-1.1.2-2.1-.1-3 .2-.2.4-.3.7-.5 1.3-.3 2.3-1.1 3-2.1.1 0 .1-.1.2-.1.5-.4.9-.4.8-.5.7.3 1.3.9 2 1.4 2.3 2 4.5 4 7.2 5.4 1.9 1 3.6.7 4.9-.2.3 12.4.9 24.7 1.7 37 1 15.8 2.5 31.8 2.7 47.6.1 11.1-4.8 21.4 1.4 31.8 1.4 2.3 3.1 4.2 5.2 5.6-5.7 8.9-1.6 22.1 3 32.6-1.4.4-2.7 1.3-3.3 2.9-.1.1-.2.2-.3.4-.8 1-1.1 2.1-1.4 3.2-.8 2.9 1.5 5.1 4 5.9 4.6 1.5 9.4 2.4 14.3 2.8 0 1.2.4 2.5 1.4 3.6 4.7 5.7 9.4 12.9 8.6 20.6zm-23.8-125c-.6-8.3-.9-16.6-1.4-24.8-1.2-18.4-2.3-36.7-2.3-55.1 1.2.3 2.5.1 3.8-1 6.1-5.3 10.9-1.9 15.2 3.9 5.1 6.7 8.4 14.7 11.1 22.6 7.6 21.8 10.5 46.8 2 68.6-2.9 7.4-6.6 14.6-11.2 21.1-2.1 3-8.6 12.1-12.9 10.6-9.4-3.3-4.7-19.3-3.9-26.1.8-6.6.1-13.3-.4-19.8zm69 41.2c-.5 11.8-2.3 24.4-10.1 33.7-6.9 8.2-17.5 13-27.8 15.1-5.5 1.1-11.1 1.5-16.6 1.1 0-.7-.2-1.4-.6-2.1-3.1-6.2-15.1-27.4-4.9-32 1.5-.7 2.4-1.7 2.9-3 6.2-3.1 10.9-9.4 14.6-14.9 4.4-6.6 8.2-13.7 11-21.2 9-23.3 6.4-48.2-.6-71.8-4.6-15.5-21.3-54-42.6-35.4-1.3 1.1-1.8 2.5-1.8 3.9-2.9-.5-6.4 1.3-6.4 5.1v2.8c-.1-.1-.2-.1-.3-.2-3.1-1.7-5.3-4.6-8.3-6.4-3.9-2.3-8.1-1.8-11.7.7-.5.3-.9.7-1.2 1.1-2.8 1.1-5.2 3.7-7.2 5.7-1.2 1.2-1.5 3-1 4.6v.4c-.8.4-1.5.7-2.7 1.2-.1 0-.1.1-.2.1-1.2-9.4-2.3-18.7-3.4-28.1 1.4-1.9 1.1-5.1-.7-6.9-.4-4.4-.9-8.9-1.2-13.3-.4-4.9-6.4-5.6-8.9-2.8-.9-1.1-2.2-1.8-4-1.8-6.4 0-5.6 10 .8 10 1 0 1.8-.2 2.5-.6 1.4 15.4 3.2 30.8 5.2 46.2-.4-.4-.8-.7-1.3-1-1.6-.7-3.2-1.3-4.9-1.7-.1 0-.9-.3-1.2-.4-.1 0-.2-.1-.3-.1-.7-.6-1.6-1-2.5-1.2a5 5 0 0 0-1.6-1.1c-4.7-2.1-10.2-2.8-15-.9-4.3 1.7-5.7 5.5-4.8 9.3-1.7 2-4.2 3.6-6.8 4.6-2.5-18.4-4.9-36.7-6.4-55.2 5-1.3 9.7-3.4 13.5-7 4.7-4.4-2.9-11-7.5-6.6-5.7 5.3-16.5 5.4-23.8 5.9-10 .6-20 .2-30 0-5.6-.1-11.2.7-16.8 1-7.8.4-15.6.4-23.4.4-13.7 0-27-4-40.7-4.5-.5-2.9-1.2-5.7-2.1-8.4 14.6-5.8 31-22.8 29.4-37.8 6.1.5 12-1.4 15.4-6 12 5.2 26.4 5.1 39.1 5.1 19.2 0 38.2 1.7 57.4.2 22-1.6 58.1-5.5 62.5-32.9v-.3c.5 0 1-.2 1.4-.4.6.2 1.2.4.8.1 2.1 1.6 3.6 3.8 5 6 2.7 4.5 3.6 10.2 3.8 15.3.6 14.1.1 28.1 0 42.2l-2.1 1.8c-.2.1-.4.1-.6.1-1.5.4-2.5 1.2-3 2.3-5.1 3.3.4 11.2 5.9 8.1.7-.4 1.5-.9 2.3-1.4 11.9-2.9 24.2-5.1 36.4-3.8 12.7 1.3 22.6 7.2 29.6 17.8 6.4 9.8 9.6 21.8 11.8 33.1 2.6 13.5 3.7 27.1 4.4 40.8.8 15.8.8 31.5.8 47.3.2 12.9 1 25.5.5 38.1z'
      />
      <path
        fill='#010101'
        d='M219.5 69.3c-8.4 1.3-15.5 8.4-16.1 16.8-1.1.9-1.8 2.2-1.5 4.1 2.6 20.8 32 11.5 34.4-4.8 1.3-9.6-7.5-17.4-16.8-16.1zm6.7 15.7c-.9 4-11 10.4-13.7 6.3.6-.8 1-1.9.9-3.3-.7-8.9 14.9-12.2 12.8-3zM186 80.2c-1.6-1.9-3.6-3.4-6.1-3.7-2.9-.3-5.4.5-7.9 2-3.2 2-5.7 5-7.9 8-1.2 1.7-1.6 3.8-.7 5.6-.9 2-.7 4.6 1.1 6 4.5 3.3 10.5 6.3 16.1 4 4.3-1.8 7-5.9 7.7-10.4.7-3.7.2-8.4-2.3-11.5zm-7.7 11c-.1.3-.3.7-.5 1 0 .1-.1.1-.1.2s-.1.1-.2.2-.2.2-.4.3c-.1 0-.2.1-.2.1h-.5l-1.5-.3c-.6-.2-1.2-.5-1.7-.8-.1-.1-.2-.1-.3-.2.6-.8 1.3-1.6 2-2.3.4-.5.9-.9 1.3-1.3.2-.2.4-.3.6-.5.4-.3.8-.5 1.2-.8.1 0 .2-.1.3-.1l.3.9c.1.6.1 1.2.1 1.8-.1.5-.3 1.2-.4 1.8zm148.9 74.4c-1-.9-2.4-1.3-3.7-1.2-1.3.1-2.5.7-3.4 1.7-.9 1.1-1.2 2.3-1.2 3.7v1.5c0 1.2.8 2.6 1.7 3.4 1 .9 2.4 1.3 3.7 1.2 1.3-.1 2.5-.7 3.4-1.7.9-1.1 1.2-2.3 1.2-3.7V169c0-1.3-.8-2.6-1.7-3.4zm-30 55.5c-1.1-.9-2.3-1.2-3.7-1.2H292c-1.2 0-2.6.8-3.4 1.7-.9 1-1.3 2.4-1.2 3.7.1 1.3.7 2.5 1.7 3.4 1.1.9 2.3 1.2 3.7 1.2h1.5c1.2 0 2.6-.8 3.4-1.7.9-1 1.3-2.4 1.2-3.7-.1-1.3-.8-2.5-1.7-3.4zm-3.3-67.7c-7.3-.7-14.4 2.8-18 9.2-1.7 3.1.2 5.7 2.7 6.7 0 .1 0 .1.1.2 2.5 6.6 8.7 10.2 15.6 9.9 7.5-.3 11.8-6.5 12.1-13.4.3-7-6.1-11.9-12.5-12.6zm-5.8 12.8c-.2-.6-.5-1-.8-1.4 3.1-1.9 7.8-2.7 9 .8 1.8 5.1-6.7 4.5-8.2.6zm-13-64.1c-2.9-6.9-9.9-9.6-16.9-8.1-7.8 1.7-11.1 10.1-11.3 17.2-.1 2.1.9 3.4 2.3 4 3.3 6.8 11 9.8 18.3 7.1 8.2-2.9 10.8-12.6 7.6-20.2zM265 112.5c-2.4 1.8-5.8 1-6.9-1.8-.3-.7-.6-1.3-1.1-1.7.4-2.2 1.4-4.3 3.4-5.1 1.8-.8 3.6-.5 4.8 1 1.6 2 2 5.9-.2 7.6zm36.6-30.1c-1.1-3.5-3.6-7-6.6-9.1-1.7-1.2-3.7-2.4-5.9-2.6-2.5-.2-5.1.2-7.1 1.9-2.7 2.4-4.1 5.3-5.1 8.8-.3 1.1-.1 2.2.4 3.2-1.2 2.4-.2 5.5 2.3 6.7 3.1 1.5 6.4 2.8 9.8 3.5 2.4.5 5.2.6 7.4-.4 2.7-1.1 4.4-3.2 5.2-6 .6-1.8.2-4.1-.4-6zm-12.6 2c-.8-.3-1.5-.5-2.3-.9 0-.1.1-.1.1-.2.1-.2.1-.4.2-.6.2-.6.5-1.3.9-1.9l.2-.2c.2.1.5.2.7.4.2.1.3.2.5.4.4.3.8.7 1.1 1.1.2.2.4.5.6.7.3.4.6.9.8 1.3.1.2.2.4.2.6-1-.1-2-.4-3-.7z'
      />
    </svg>
  );
};
