

// ---------- script properties ----------

var include_num = 1;
var bold = 0;

// ---------- sites ----------


var s = new Array();

s[0] = "JSE^form.html^Enter JSE in the example above ...^open source, free, client side";
s[1] = "JSE DOCUMENTATION^doc.txt^JSE is a client-side local site search engine. Written entirely in JavaScript 1.3 it works with browsers from Netscape 4.7 to Microsoft Internet Explorer 6.0 ...^ faq, docs, instructions";
s[2] = "Testemunho Irmã Dani cura dor há anos, depressão emprego e namoro (Rincão 02/08/2023)^https://diretorio.iepafontededeus.com.br/02-08-2023/^Testemunho Irmã Dani, ela estava afastada da igreja e entrando em depressão, Deus falou com ela no primeiro dia atráves do pastor de uma dor que ela tinha há anos, e ela estava desempregada mesmo sendo bacharel em direito, pastor orou e em 1 semana foi indicada para o gestor e passou, e ela conseguiu um namorado.^testemunho, cura, emprego, depressão, namoro, rincao";
s[3] = "Revelação cura das trompas da irmã (Rincão 02/08/2023)^https://diretorio.iepafontededeus.com.br/02-08-2023/#revelacaotrompas^Pastor orou na fila e revelou que havia algo inpedindo as trompas da irmã, mas que Deus iria dar vitória e ela vai ter um bebê que é a cara do marido dela.^revelação, trompas, cura, trombas, trompa, tromba, rincao";
s[4] = "Oração para o Marquinho (Canta Galo 03/08/2023)^https://diretorio.iepafontededeus.com.br/03-08-2023/^Pastor levanta a igreja para orar pelo Marquinho do Canta Galo, ele pede para Deus fazer a vontade Dele.^oração, canta galo";
s[5] = "Revelação para visitante de chave, e visitando os dela (Canta Galo 04/08/2023)^https://diretorio.iepafontededeus.com.br/04-08-2023/^Pastor passa revelação para visitante, que Deus iria dar uma chave na mão dela, e que Deus também vai de encontro com os dela.^revelação, chave, canta galo";
s[6] = "Testemunho irmã desempregada a 2 (dois) anos, 7 elo restauração a dois (Perus 04/08/2023)^https://diretorio.iepafontededeus.com.br/04-08-2023/#desempregada2anos^Irmã estava desempregada a 2 anos, ela pediu oração ao pastor e ele revelou o salmos 40, em apenas 3 meses que ela vem para a igreja Deus a honrou, dando emprego de carteira registrada para ela e para seu filho.^testemunho, emprego, campanha, perus";
s[7] = "Testemunho marido voltou e bateu na porta, 7 elo restauração a dois (Perus 04/08/2023)^https://diretorio.iepafontededeus.com.br/04-08-2023/#baternaporta^Testemunho da irmã que o pastor revelou que o ex-marido dela ia bater na porta e que ela iria dar testemunho na próxima sexta feira (dia 04/08/2023), ela estava fazendo a unha e não esperava ele, e o mesmo não deixou ela fazer a unha, e ele disse que amava ela.^testemunho, campanha, amor, perus";
s[8] = "Testemunho Natália casamento restituido, 7 elo restauração a dois (Perus 04/08/2023)^https://diretorio.iepafontededeus.com.br/04-08-2023/#nataliacasamentorestituido^Testemunho Irmã Natália que teve seu casamento restituido após a campanha da vida sentimental de 2023.^testemunho, campanha, amor, perus";
s[9] = "Testemunho e revelação de emprego aonde não existia, 7 elo restauração a dois (Perus 04/08/2023)^https://diretorio.iepafontededeus.com.br/04-08-2023/#vagaondenaoexistia^Testemunho (e revelação) do irmão que o pastor disse que iria conseguir uma vaga aonde não existia.^testemunho, revelação, emprego, perus";
s[10] = "Revelação para o obreiro Cléssio de honra na vida empresarial, 7 elo restauração a dois (Perus 04/08/2023)^https://diretorio.iepafontededeus.com.br/04-08-2023/#revelacaoclessioempresario^Pastor revelou para Cooperador Cléssio que Deus estará honrando ele e que ele irá ser bem sucedido na vida empresarial.^revelação, dinheiro, perus";
s[11] = "Oração final 2023, 7 elo restauração a dois (Perus 04/08/2023)^https://diretorio.iepafontededeus.com.br/04-08-2023/#oracaofinalrestadois2023^Pastor fazendo a oração final para a campanha da vida sentimental de 2023.^oração, campanha, perus";
s[12] = "Testemunho de emprego na consagração (Canta Galo 05/08/2023)^https://diretorio.iepafontededeus.com.br/05-08-2023/^Irmã dá o testemunho de emprego na consagração.^testemunho, emprego, canta galo";
s[13] = "Google^https://google.com^O mecanismo de busca mais usado do mundo^google, pesquisa, internet, site";
s[14] = "IEP A Fonte de Deus Youtube^https://youtube.com/@iepafontededeus^Canal da igreja no youtube^youtube, igreja, canal, internet, site";
s[15] = "IEP A Fonte de Deus Instagram^https://instagram.com/iepafontededeus^Perfil da igreja no instagram^instagram, igreja, perfil, internet, site";
s[16] = "IEP A Fonte de Deus Facebook^https://facebook.com/afontededeusoficial^Perfil da igreja no facebook^facebook, igreja, perfil, internet, site";
s[17] = "IEP A Fonte de Deus Tiktok^https://tiktok.com/@iepafontededeus^Perfil da igreja no Tiktok^tiktok, igreja, tik tok, perfil, internet, site";
s[18] = "Pastor Jesus Instagram^https://instagram.com/pastor.jesusiep^Perfil do Pastor Jesus no instagram^instagram, perfil, internet, pastor, site";
s[19] = "Diretório IEP A Fonte de Deus^https://diretorio.iepafontededeus.com.br/^Diretório de videos dos cultos da IEP A Fonte de Deus^diretório, diretorio, igreja, site";
s[20] = "Cultos Quarta-Feira dia 02/08/2023 (Rincão)^https://diretorio.iepafontededeus.com.br/02-08-2023/^Videos dos cultos do dia 02 de agosto de 2023 (Quarta-Feira) (Rincão)^cultos, culto, quarta, quarta-feira, quarta feira, rincão, rincao, agosto, 2023";
s[21] = "Cultos Quinta-Feira dia 03/08/2023 (Canta Galo, Recanto)^https://diretorio.iepafontededeus.com.br/03-08-2023/^Videos dos cultos do dia 03 de agosto de 2023 (Quinta-Feira) (Canta Galo, Recanto)^cultos, culto, quinta, quinta-feira, quinta feira, canta galo, recanto, agosto, 2023";
s[22] = "Cultos Sexta-Feira dia 04/08/2023 (Canta Galo, Perus)^https://diretorio.iepafontededeus.com.br/04-08-2023/^Videos dos cultos do dia 04 de agosto de 2023 (Sexta-Feira) (Canta Galo, Perus) (7 Elo campanha Restauração a Dois)^cultos, culto, sexta, sexta-feira, sexta feira, canta galo, perus, campanha, agosto, 2023";
s[23] = "Cultos Sábado dia 05/08/2023 (Canta Galo, Rincão)^https://diretorio.iepafontededeus.com.br/05-08-2023/^Videos dos cultos do dia 05 de agosto de 2023 (Sábado) (Canta Galo, Rincão)^cultos, culto, sabado, canta galo, rincão, rincao, agosto, 2023";
s[24] = "Cultos Domingo dia 06/08/2023 (Canta Galo, Recanto, Rincão, Perus)^https://diretorio.iepafontededeus.com.br/06-08-2023/^Videos dos cultos do dia 06 de agosto de 2023 (Domingo) (Canta Galo, Recanto, Rincão, Perus)^cultos, culto, domingo, canta galo, rincão, rincao, recanto, perus, agosto, 2023";

// ---------- end of script properties and sites ----------


var cookies = document.cookie;
var p = cookies.indexOf("d=");

if (p != -1) {
	var st = p + 2;
	var en = cookies.indexOf(";", st);
	if (en == -1) {
		en = cookies.length;
	}
	var d = cookies.substring(st, en);
	d = unescape(d);
}
var od = d;
var m = 0;
if (d.charAt(0) == '"' && d.charAt(d.length - 1) == '"') {
	m = 1;
}

var r = new Array();
var co = 0;

if (m == 0) {
	var woin = new Array();
	var w = d.split(" ");
	for (var a = 0; a < w.length; a++) {
		woin[a] = 0;
		if (w[a].charAt(0) == '-') {
			woin[a] = 1;
		}
	}
	for (var a = 0; a < w.length; a++) {
		w[a] = w[a].replace(/^\-|^\+/gi, "");
	}
	a = 0;
	for (var c = 0; c < s.length; c++) {
		pa = 0;
		nh = 0;
		for (var i = 0; i < woin.length; i++) {
			if (woin[i] == 0) {
				nh++;
				var pat = new RegExp(w[i], "i");
				var rn = s[c].search(pat);
				if (rn >= 0) {
					pa++;
				} else {
					pa = 0;
				}
			}
			if (woin[i] == 1) {
				var pat = new RegExp(w[i], "i");
				var rn = s[c].search(pat);
				if (rn >= 0) {
					pa = 0;
				}
			}
		}
		if (pa == nh) {
			r[a] = s[c];
			a++;
		}
	}
	co = a;
}

if (m == 1) {
	d = d.replace(/"/gi, "");
	var a = 0;
	var pat = new RegExp(d, "i");
	for (var c = 0; c < s.length; c++) {
		var rn = s[c].search(pat);
		if (rn >= 0) {
			r[a] = s[c];
			a++;
		}
	}
	co = a;

}


function return_query() {
	document.jse_Form.d.value = od;
}

function num_jse() {
	document.write(co);
}

function out_jse() {
	if (co == 0) {
		document.write('Sua pesquisa não corresponde com nenhum documento.<p>Tenha certeza que todas as palavras estejam escritas corretamente.<br>Tente palavras-chaves diferentes ou mais gerais.');
		return;
	}
	for (var a = 0; a < r.length; a++) {
		var os = r[a].split("^");
		if (bold == 1 && m == 1) {
			var br = "<b>" + d + "</b>";
			os[2] = os[2].replace(pat, br);
		}
		if (include_num == 1) {
			document.write(a + 1, '. <a href="', os[1], '">', os[0], '</a><br>', os[2], '<p>');
		} else {
			document.write('<a href="', os[1], '">', os[0], '</a><br>', os[2], '<p>');
		}
	}

}
