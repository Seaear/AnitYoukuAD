// Copyright (c) 2013 SNS. All rights reserved.
// 优酷土豆视频广告过滤
// 开发者：SNS  sns@kmnet.net

/*
更新记录
v0.1 屏蔽优酷广告
v0.2 增加屏蔽土豆广告
v0.3 增加屏蔽奇异、搜狐、56广告
v0.4 增加屏蔽腾讯、PPLive、PPS广告
*/

//优酷
chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
  	console.log('优酷:'+ details.url)
    return {redirectUrl: "http://v.youku.com/QVideo/~ajax/getVideoPlayInfo"};
  	},
  {urls: ["*://valf.atm.youku.com/valf*"]},
  ["blocking"]);

//土豆
chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
  	console.log('土豆:'+ details.url)
  	return {cancel: true};
  	},
  {urls: ["*://td.atm.youku.com/tdcm/adcontrol*"]},
  ["blocking"]);

//奇异
chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
  	console.log('奇异:'+ details.url)
  	//return {cancel: true};
  	return {redirectUrl: "http://api.cupid.qiyi.com/api?key=0000000000000"};
  	},
  {urls: ["*://api.cupid.qiyi.com/api?key=1*"]},
  ["blocking"]);

//搜狐
chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
  	console.log('搜狐:'+ details.url)
  	return {cancel: true};
  	},
  {urls: ["*://v.aty.sohu.com/v*"]},
  ["blocking"]);

//56
chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
  	console.log('56:'+ details.url)
  	return {cancel: true};
  	},
  {urls: ["*://acs.56.com/redirect/view/*"]},
  ["blocking"]);

//QQ
chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
  	console.log('QQ:'+ details.url)
  	return {cancel: true};
  	},
  {urls: ["*://adslvfile.qq.com/qqlive/*","*://vv.video.qq.com/getmind*"]},
  ["blocking"]);

//PPLive
chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
  	console.log('PPLive:'+ details.url)
  	return {cancel: true};
  	},
  {urls: ["*://asimgs.pplive.cn/imgs/*"]},
  ["blocking"]);

//PPS
chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
  	console.log('PPS:'+ details.url)
  	return {cancel: true};
  	},
  {urls: ["*://ugcad.pps.tv/ugc_ad.php?*"]},
  ["blocking"]);

//Ku6
/*chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
  	console.log('Ku6:'+ details.url)
  	return {cancel: true};
  	},
  {urls: ["*://*.snyu.com/*","*://st.vq.ku6.cn/vq/init*","*://dwtracking.sdo.com/ku6.gif*",
  	"*://*.sdo.com/*","*://*.stat.ku6.com/*","http://recv.ku6.com/recvideo2.htm*",
  	"*://cj.qidian.com/svnad/ku6/adjs.js","http://ipic.staticsdo.com/external/*",
  	"http://irs01.com/*","http://irs01.net/*"
  	]},
  ["blocking"]);*/

