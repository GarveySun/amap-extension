/*************************************************
 * Copyright (C), since 2017, Likechuxing Tech. Co., Ltd.
 * File name: marker
 * Author: garvey sunjiawei@likechuxing.com
 * Version: 1.0.0
 * Date: 2018-12-24-14:16
 * Description:
 *
 *************************************************/

// zoomIn
window.AMap.Marker.prototype.zoomIn = function (rate) {
  let zoomIn_rate = rate || 3 / 2

  this.is_zoomIn = true

  let offset = this.getOffset()
  this.setOffset(offset.translate(zoomIn_rate))

  let icon = this.getIcon()
  let icon_new = new AMap.Icon({
    image: icon.B.image,
    size: icon.B.size.translate(zoomIn_rate),
    imageSize: icon.B.imageSize.translate(zoomIn_rate)
  })
  this.setIcon(icon_new)

}

// zoomOut
window.AMap.Marker.prototype.zoomOut = function (rate) {
  let zoomOut_rate = rate || 2 / 3

  this.lis_zoomIn = false

  let offset = this.getOffset()
  this.setOffset(offset.translate(zoomOut_rate))

  let icon = this.getIcon()
  let icon_new = new AMap.Icon({
    image: icon.B.image,
    size: icon.B.size.translate(zoomOut_rate),
    imageSize: icon.B.imageSize.translate(zoomOut_rate)
  })
  this.setIcon(icon_new)
}