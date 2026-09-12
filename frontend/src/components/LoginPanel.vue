<script setup>
import { ref } from 'vue'
import { store, setAuthUser } from '../store'
import { login, register } from '../api'

const mode = ref('login') // login | register
const username = ref('')
const password = ref('')
const displayName = ref('')
const err = ref('')
const busy = ref(false)

async function submit() {
  err.value = ''
  if (!username.value.trim() || !password.value) {
    err.value = '请填写用户名和密码'
    return
  }
  busy.value = true
  try {
    const user = mode.value === 'login'
      ? await login(username.value.trim(), password.value)
      : await register(username.value.trim(), password.value, displayName.value.trim())
    setAuthUser(user)
  } catch (e) {
    err.value = e.message || '操作失败'
  } finally {
    busy.value = false
  }
}

function guest() {
  store.loginOpen = false
}
</script>

<template>
  <div class="auth-mask" @click.self="guest">
    <div class="auth-card">
      <div class="auth-logo">✦ 北极星 NorthStar</div>
      <p class="auth-sub">盯住那一颗星 · 登录后多账号数据隔离</p>

      <div class="auth-tabs">
        <button :class="{ on: mode === 'login' }" @click="mode = 'login'">登录</button>
        <button :class="{ on: mode === 'register' }" @click="mode = 'register'">注册</button>
      </div>

      <div class="auth-field">
        <label>用户名</label>
        <input v-model="username" placeholder="如 maggie" @keydown.enter="submit">
      </div>
      <div class="auth-field">
        <label>密码</label>
        <input v-model="password" type="password" placeholder="••••••••" @keydown.enter="submit">
      </div>
      <div v-if="mode === 'register'" class="auth-field">
        <label>显示名（可选）</label>
        <input v-model="displayName" placeholder="昵称" @keydown.enter="submit">
      </div>

      <p v-if="err" class="auth-err">{{ err }}</p>

      <button class="auth-btn primary" :disabled="busy" @click="submit">
        {{ busy ? '请稍候…' : (mode === 'login' ? '登录' : '注册并登录') }}
      </button>
      <button class="auth-btn ghost" @click="guest">以游客身份进入（仅浏览演示数据）</button>
    </div>
  </div>
</template>

<style scoped>
.auth-mask {
  position: fixed; inset: 0; z-index: 1000;
  display: flex; align-items: center; justify-content: center;
  background: rgba(10, 20, 14, 0.55); backdrop-filter: blur(6px);
}
.auth-card {
  width: 360px; max-width: 92vw;
  background: #fff; border-radius: 16px; padding: 28px;
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.22);
  border: 1px solid #E9E9E5;
}
.auth-logo { font-size: 20px; font-weight: 800; color: #191919; letter-spacing: -.01em; }
.auth-sub { font-size: 12px; color: var(--text-mute, #9BA0A6); margin: 6px 0 18px; }
.auth-tabs { display: flex; gap: 4px; margin-bottom: 16px; background: #F4F4F1; border-radius: 10px; padding: 3px; }
.auth-tabs button {
  flex: 1; padding: 7px; border: none; border-radius: 8px;
  background: transparent; cursor: pointer; font-size: 13px; color: #5F6368;
}
.auth-tabs button.on { background: #fff; color: #191919; font-weight: 600; box-shadow: 0 1px 2px rgba(20,20,20,.06); }
.auth-field { margin-bottom: 12px; }
.auth-field label { display: block; font-size: 12px; color: var(--text-mute, #9BA0A6); margin-bottom: 4px; }
.auth-field input {
  width: 100%; padding: 10px 12px; border: 1px solid #E9E9E5; border-radius: 8px;
  font-size: 14px; box-sizing: border-box; outline: none; transition: border-color .12s, box-shadow .12s;
}
.auth-field input:focus { border-color: #191919; box-shadow: 0 0 0 3px rgba(25,25,25,.06); }
.auth-err { color: #DC2626; font-size: 12px; margin: 4px 0 10px; }
.auth-btn { width: 100%; padding: 11px; border-radius: 8px; cursor: pointer; font-size: 14px; margin-top: 6px; border: none; }
.auth-btn.primary { background: #1A1A1A; color: #fff; font-weight: 600; }
.auth-btn.primary:hover { background: #000; }
.auth-btn.ghost { background: transparent; color: var(--text-mute, #9BA0A6); }
</style>
