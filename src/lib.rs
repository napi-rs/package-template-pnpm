#![deny(clippy::all)]

use napi_derive::napi;

#[napi]
pub fn plus_100(input: u32) -> u32 {
  input + 100
}

#[napi]
pub async fn plus_100_async(input: u32) -> u32 {
  input + 100
}
