import Replicate from 'replicate'


const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
});

const output = await replicate.run(
  'tencentarc/gfpgan:9283608cc6b7be6b65a8e44983db012355fde4132009bf99d976b2f0896856a3',
  {
    input: {
      img: 'https://replicate.delivery/pbxt/28j4zeacv2xtL6XqhFWRCU3jAmfb0fDTQjkK03wQItXVpAokA/out-0.png',
    },
  }
);
console.log(output);

