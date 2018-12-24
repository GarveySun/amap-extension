/*************************************************
 * Copyright (C), since 2017, Likechuxing Tech. Co., Ltd.
 * File name: Size
 * Author: garvey sunjiawei@likechuxing.com
 * Version: 1.0.0
 * Date: 2018-12-24-14:15
 * Description:
 *
 *
 *************************************************/

window.AMap.Size.prototype.translate = function (rate) {
  let width = Math.floor(this.width * rate)
  let height = Math.floor(this.height * rate)

  return new AMap.Size(width, height)
}

