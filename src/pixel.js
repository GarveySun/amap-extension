/*************************************************
 * Copyright (C), since 2017, Likechuxing Tech. Co., Ltd.
 * File name: Pixel
 * Author: garvey sunjiawei@likechuxing.com
 * Version: 1.0.0
 * Date: 2018-12-24-14:15
 * Description:
 *
 *
 *************************************************/

window.AMap.Pixel.prototype.translate = function (rate) {
  let x = Math.floor(this.x * rate)
  let y = Math.floor(this.y * rate)

  return new AMap.Pixel(x, y)
}

