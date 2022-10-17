#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

use std::process::Command;

#[tauri::command]
fn git_add(file_path: &str) {
  let mut git = Command::new("git");
  git.args(["add", file_path]).spawn().expect("");
}
fn main() {
  tauri::Builder::default()
    .invoke_handler(tauri::generate_handler![git_add])
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}

