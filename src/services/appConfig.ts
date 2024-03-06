import { useLocalStorage } from '@vueuse/core'
import gravatarUrl from 'gravatar-url'
import { computed } from 'vue'

export const avatarUrl = "https://www.soloplan.de/wp-content/uploads/2020/04/Log_Soloplan_Quadrat-1.png"
// export const gravatarEmail = useLocalStorage('gravatarEmail', 'aha@soloplan.de')
// export const avatarUrl = computed(() => gravatarUrl(gravatarEmail.value, { size: 200 }))
export const debugMode = useLocalStorage('debug', false)
export const baseUrl = useLocalStorage('baseUrl', 'https://ai.soloplan.de/ollama/api')
export const isDarkMode = useLocalStorage('darkMode', true)
export const isSettingsOpen = useLocalStorage('settingsPanelOpen', false)
export const toggleSettingsPanel = () => (isSettingsOpen.value = !isSettingsOpen.value)
