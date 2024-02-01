<template>
	<!-- 友情链接页 -->
	<div class="wrap" :class="{ hasaside: frontmatter.aside, hassidebar: frontmatter.sidebar || theme?.sidebar?.length }">
		<div class="tools" v-for="(item, name) in data">
			<h2 class="h2" :id="item.title" tabindex="-1">
				{{ item.title }}
				<a class="header-anchor" :href="`#${item.title}`" aria-hidden="true"></a>
			</h2>
			<ul class="ul">
				<li class="li" v-for="(cell, key) in item.items">
					<div class="h3">
						<div class="icon">
							<img alt="" class="img" :src="cell?.icon" />
						</div>
						<a class="a" target="_blank" :href="cell?.link"><span class="title">{{ cell.title }}</span><span
								class="bg">
							</span></a>
					</div>

					<p class="desc" v-if="cell.desc">{{ cell.desc }}</p>
					<p class="link">
						<svg class="svg" viewBox="0 0 24 24" aria-hidden="true">
							<path
								d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
								fill="currentColor"></path>
						</svg><span class="span">{{ cell.linktxt }}</span>
					</p>
				</li>
			</ul>
		</div>
	</div>
</template>
<script lang="ts" setup>
import { computed, ref } from 'vue'
import { useData, withBase } from 'vitepress'
import type { Tools } from '../types'
import { toolsdata } from '../toolsdata'
const { theme, frontmatter } = useData();
const data = computed(() => toolsdata)
</script>

<style scoped>
.tools {
	margin-bottom: 1rem;

	.h2 {
		margin: 24px 0 8px;
		padding-top: 24px;
		border: none;
		letter-spacing: -0.02em;
		line-height: 26px;
		font-size: 20px;
		/* display: none; */
	}

	.ul {
		margin: 0;
		padding: 0;
		margin-top: 20px;

		.li {
			margin: 0;
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			position: relative;
			flex-shrink: 1;
			flex-grow: 1;
			border-radius: 8px;
			border: .5px solid var(--vp-c-gray-soft);
			background: var(--vp-c-bg-elv);
			transition-timing-function: cubic-bezier(.4, 0, .2, 1);
			transition-duration: .3s;
			transition-property: box-shadow;
			overflow: hidden;
			padding: 16px;
			box-shadow: var(--vp-shadow-1);

			.h3 {
				display: flex;
				flex-direction: row;
				margin: 0;
				padding: 0;
				border: none;
				font-size: 1rem;
				line-height: 1.75rem;
				font-weight: 600;

				.icon {
					position: relative;
					z-index: 10;
					display: flex;
					justify-content: center;
					align-items: center;
					width: 28px;
					height: 28px;
					border-radius: 28px;
					overflow: hidden;
					background-color: var(--vp-c-bg);
					box-shadow: 0 6px 30px #0000001a;
					margin-right: 8px;

					.img {
						width: 22px;
						height: 22px;
						border-radius: 22px;
					}

				}

				.a {
					color: var(--vp-c-text-1);

					.bg {
						z-index: 20;
						background: transparent;
						position: absolute;
						left:0;
						top:0;
						width: 100%;
						height:100%;
					}
				}

				.title {
					position: relative;
					z-index: 10;
					font-size: 1rem;
					line-height: 1.75rem;
					font-weight: 600;
				}
			}

			.desc {
				position: relative;
				z-index: 10;
				margin: 0;
				margin-top: 0.5rem;
				font-size: .8rem;
				line-height: 1.5rem;
				opacity: .8;
			}

			.link {
				position: relative;
				z-index: 10;
				margin: 0;
				margin-top: 10px;
				display: flex;
				font-size: .875rem;
				line-height: 1.5rem;
				font-weight: 500;
				opacity: .8;
				transition: .15s;

				.svg {
					width: 1.5rem;
					height: 1.5rem;
				}

				.span {
					margin-left: 0.5rem;
				}
			}
		}

		.li:hover {
			box-shadow: var(--vp-shadow-3);
			transition-timing-function: cubic-bezier(.4, 0, .2, 1);
			transition-duration: .3s;
			transition-property: box-shadow;
			background-color: var(--vp-c-bg-elv);
			overflow: hidden;
			/* .bg {
				opacity: 1;
				transition: .3s;
			} */

			.link {
				color: var(--vp-c-brand);
			}
		}
	}

}

.wrap ul {
	display: grid;
	row-gap: 1.2rem;
	column-gap: 1.2rem;
}

@media (min-width: 550px) {
	.wrap ul {
		/* grid-column-gap: 4.8%; */
		grid-template-columns: repeat(2, minmax(0, 1fr));
	}
}

@media (min-width: 768px) {

	.wrap.hasaside:not(.hassidebar) ul,
	.wrap.hassidebar:not(.hasaside) ul {
		/* grid-column-gap: 4.8%; */
		grid-template-columns: repeat(2, minmax(0, 1fr));
	}

	.wrap.hassidebar:not(.hasaside) ul {
		/* grid-column-gap: 3.5%; */
		grid-template-columns: repeat(3, minmax(0, 1fr));
	}

	.wrap:not(.hassidebar):not(.hasaside) ul {
		/* grid-column-gap: 3.5%; */
		grid-template-columns: repeat(3, minmax(0, 1fr));
	}
}

@media (min-width: 960px) {

	.wrap.hasaside:not(.hassidebar) ul,
	.wrap.hassidebar:not(.hasaside) ul {
		/* grid-column-gap: 4.8%; */
		grid-template-columns: repeat(2, minmax(0, 1fr));
	}

	.wrap:not(.hassidebar):not(.hasaside) ul {
		/* grid-column-gap: 3.5%; */
		grid-template-columns: repeat(3, minmax(0, 1fr));
	}
}

@media (min-width: 1100px) {

	.wrap.hasaside.hassidebar ul,
	.wrap.hasaside:not(.hassidebar) ul {
		/* grid-column-gap: 4.8%; */
		grid-template-columns: repeat(2, minmax(0, 1fr));
	}

	.wrap.hassidebar:not(.hasaside) ul {
		/* grid-column-gap: 3.5%; */
		grid-template-columns: repeat(3, minmax(0, 1fr));
	}

	.wrap:not(.hassidebar):not(.hasaside) ul {
		/* grid-column-gap: 3.5%; */
		grid-template-columns: repeat(3, minmax(0, 1fr));
	}
}

@media (min-width: 1280px) {

	.wrap.hasaside.hassidebar ul,
	.wrap.hasaside:not(.hassidebar) ul {
		/* grid-column-gap: 4.8%; */
		grid-template-columns: repeat(2, minmax(0, 1fr));
	}


	.wrap.hassidebar:not(.hasaside) ul {
		/* grid-column-gap: 3.5%; */
		grid-template-columns: repeat(3, minmax(0, 1fr));
	}

	.wrap:not(.hassidebar):not(.hasaside) ul {
		/* grid-column-gap: 3.5%; */
		grid-template-columns: repeat(3, minmax(0, 1fr));
	}
}
</style>
../toolsdata