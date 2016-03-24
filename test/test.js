import {expect} from 'chai'
import getRandomColor from '../src/index'

describe('generate color', () => {
  it('return a random color', () => {

    let reg = /^rgb\(\d{1,3}\,\d{1,3}\,\d{1,3}\)$/
    let result = reg.test(getRandomColor())

    expect(result).to.be.true
  })
})
