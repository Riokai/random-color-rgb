import {expect} from 'chai'
import getRandomColor from '../build/dist'
// var getRandomColor = require('../build/dist')

describe('generate color', () => {
  it('return a random color', () => {

    let reg = /^rgb\(\d{1,3}\,\d{1,3}\,\d{1,3}\)$/
    // let result = reg.test(getRandomColor())
    let result = reg.test(getRandomColor());

    expect(result).to.be.true
  })
})
