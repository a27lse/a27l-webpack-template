import getInfo from '@helper/getInfo.js';
import github from '@images/github.png';

const Template = async () => {
  const data = await getInfo();
  const view = `
    <div class="a27l-box">
        <div class="a27l-box a27l-info a27l-box-center">
            <h2>${data.name}</h2>
            <h3>${data.descripcion}</h3>
        </div>
        <div class="a27l-box a27l-box-center">
          <a href="https://github.com/a27lse/webpack-template">
            <img src="${github}" />
          </a>
        </div>
      </div>
    </div>
  `;
  return view;
};

export default Template;
