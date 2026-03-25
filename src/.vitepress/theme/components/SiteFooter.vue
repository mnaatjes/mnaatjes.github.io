<script setup lang="ts">
import { Github, Linkedin, Mail, Facebook, MessageCircle, Scale, ShieldCheck } from 'lucide-vue-next'
import ContactLink from './ContactLink.vue'

const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="mt-20 py-16 border-t border-slate-800 bg-slate-900 text-slate-300">
    <div class="max-w-7xl mx-auto px-6 sm:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
      
      <!-- Column 1: Identity & Legal -->
      <div class="flex flex-col gap-8">
        <div>
          <h3 class="text-xl font-extrabold text-white mb-4 uppercase tracking-wider">
            Michael Naatjes
          </h3>
          <p class="text-slate-400 text-sm leading-relaxed max-w-xs font-semibold">
            Building resilient backend architectures and high-fidelity developer tools.
          </p>
        </div>

        <!-- Legal Links -->
        <nav class="flex flex-col gap-3">
          <a href="/license" class="inline-flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-blue-400 uppercase tracking-[0.2em] transition-colors duration-500">
            <Scale class="w-3.5 h-3.5" />
            MIT License
          </a>
          <a href="/terms" class="inline-flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-blue-400 uppercase tracking-[0.2em] transition-colors duration-500">
            <ShieldCheck class="w-3.5 h-3.5" />
            Terms of Use
          </a>
        </nav>

        <div class="text-[10px] font-bold text-slate-600 uppercase tracking-[0.3em]">
          Copyright 2024-{{ currentYear }} | Michael Naatjes
        </div>
      </div>

      <!-- Column 2: Navigation -->
      <div class="hidden lg:flex flex-col gap-4">
        <h4 class="text-xs font-bold text-slate-600 uppercase tracking-[0.3em] mb-4">Core Sections</h4>
        <div class="grid grid-cols-1 gap-3">
          <a v-for="link in ['Projects', 'Solutions', 'Case Studies', 'About']" :key="link" 
             :href="'/' + link.toLowerCase().replace(' ', '_') + '/'"
             class="text-sm font-bold text-slate-400 hover:text-white transition-colors duration-500">
            {{ link }}
          </a>
        </div>
      </div>

      <!-- Column 3: Contact & Socials -->
      <div class="flex flex-col gap-6">
        <h4 class="text-xs font-bold text-slate-600 uppercase tracking-[0.3em] mb-4">Contact Me</h4>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
          <ContactLink 
            href="mailto:michael.naatjes87@gmail.com" 
            label="Email" 
            :icon="Mail" 
          />
          <ContactLink 
            href="https://github.com/mnaatjes" 
            label="GitHub" 
            :icon="Github" 
          />
          <ContactLink 
            href="https://www.linkedin.com/in/michael-naatjes-045900329/" 
            label="LinkedIn" 
            :icon="Linkedin" 
          />
          <ContactLink 
            href="https://www.facebook.com/mnaatjes/" 
            label="Facebook" 
            :icon="Facebook" 
          />
          <ContactLink 
            href="https://m.me/mnaatjes" 
            label="Messenger" 
            :icon="MessageCircle" 
          />
        </div>
      </div>

    </div>
  </footer>
</template>
