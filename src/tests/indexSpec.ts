import supertest from 'supertest';
import app from '../index';
import sharp from 'sharp';
import resizeImage from '../utilities/resize-image';

const request = supertest(app);

describe('Test endpoint responses', () => {
  it('gets the image endpoint', async (done) => {
    const response = await request.get('/api/image?filename=fjord&width=200&height=200');
    expect(response.status).toBe(200);
    done();
  }
  )
});

describe('resizeImage function tests', () => {
  const inputfile = '/Users/peterstaal/Desktop/udacity/image-project-api/images/full/fjord.jpg';
  const outputfile = '/Users/peterstaal/Desktop/udacity/image-project-api/images/thumb/200-200-fjord.jpg';

  it('returns the right outputfile', async (done) => {
    const response = await resizeImage(inputfile, outputfile, 200, 200);
    expect(response).toBe(outputfile);
    done();
  }
  )
});